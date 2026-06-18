from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy.orm import Session

from app.ml.resume_parser import extract_text_from_pdf, mock_parse_resume_to_skills
from app.ml.predictor import CareerSuccessPredictor
from app.ml.llm_mentor import generate_mentor_response
from app.database.database import get_db
from app.database.models import MentorChat

router = APIRouter(
    prefix="/ai",
    tags=["AI Core"]
)

predictor = CareerSuccessPredictor()


# ─── Request / Response Models ──────────────────────────────────────────────

class PredictorRequest(BaseModel):
    skills: List[str]
    projects_count: int
    streak_days: int

class PredictorResponse(BaseModel):
    readiness_score: float
    internship_match_probability: float

class ChatHistoryItem(BaseModel):
    role: str  # "user" or "ai"
    content: str

class ChatRequest(BaseModel):
    message: str
    user_id: Optional[int] = 2  # Default to seeded user
    history: Optional[List[ChatHistoryItem]] = []

class ChatResponse(BaseModel):
    reply: str
    user_id: int


# ─── Endpoints ───────────────────────────────────────────────────────────────

@router.post("/parse-resume")
async def parse_resume(file: UploadFile = File(...)):
    if not file.filename or not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported")
    
    contents = await file.read()
    text = extract_text_from_pdf(contents)
    if not text:
        raise HTTPException(status_code=500, detail="Could not extract text from PDF")
        
    skills = mock_parse_resume_to_skills(text)
    
    return {
        "filename": file.filename,
        "extracted_skills": skills,
        "text_preview": text[:200] + "..." if len(text) > 200 else text
    }


@router.post("/predict", response_model=PredictorResponse)
def predict_career_readiness(request: PredictorRequest):
    """
    Returns AI predictions based on the user's current stats.
    """
    user_stats = {
        "projects_completed": request.projects_count,
        "skill_coverage_percentage": len(request.skills) * 15,
        "streak_days": request.streak_days,
        "has_portfolio": True
    }
    
    score = predictor.predict_readiness(user_stats)
    match_result = predictor.predict_internship_match(request.skills, ["react", "python", "ui/ux", "typescript"])
    match_prob = match_result["match_percentage"]
    
    return PredictorResponse(
        readiness_score=score,
        internship_match_probability=match_prob
    )


@router.post("/chat", response_model=ChatResponse)
def chat_with_mentor(request: ChatRequest, db: Session = Depends(get_db)):
    """
    Send a message to the AI Career Mentor and get a response.
    Persists both user message and AI reply to the MentorChat table.
    """
    # Persist user message
    user_msg = MentorChat(
        user_id=request.user_id,
        role="user",
        message=request.message
    )
    db.add(user_msg)
    db.commit()

    # Build history for the LLM
    history = [{"role": item.role, "content": item.content} for item in (request.history or [])]

    # Generate response
    ai_reply = generate_mentor_response(request.message, history)

    # Persist AI reply
    ai_msg = MentorChat(
        user_id=request.user_id,
        role="ai",
        message=ai_reply
    )
    db.add(ai_msg)
    db.commit()

    return ChatResponse(reply=ai_reply, user_id=int(request.user_id or 2))


@router.get("/chat/history/{user_id}")
def get_chat_history(user_id: int, limit: int = 20, db: Session = Depends(get_db)):
    """
    Retrieve the last N chat messages for a user.
    """
    messages = (
        db.query(MentorChat)
        .filter(MentorChat.user_id == user_id)
        .order_by(MentorChat.timestamp.desc())
        .limit(limit)
        .all()
    )
    # Return in chronological order
    return [
        {
            "role": m.role,
            "content": m.message,
            "timestamp": m.timestamp.isoformat() if m.timestamp else None
        }
        for m in reversed(messages)
    ]
