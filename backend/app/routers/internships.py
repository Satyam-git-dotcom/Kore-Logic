from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database.database import get_db
from app.schemas.internship import Internship, InternshipCreate
from app.crud import internship as crud_internship

router = APIRouter(
    prefix="/internships",
    tags=["internships"],
)

@router.get("/", response_model=List[Internship])
def read_internships(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_internship.get_internships(db, skip=skip, limit=limit)

@router.post("/", response_model=Internship)
def create_internship(internship: InternshipCreate, db: Session = Depends(get_db)):
    return crud_internship.create_internship(db=db, internship=internship)
