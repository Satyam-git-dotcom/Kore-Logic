import os
from typing import List, Dict

KORE_LOGIC_SYSTEM_PROMPT = """You are Kore Logic's AI Career Mentor — an expert career coach specializing in tech careers, software engineering, machine learning, and product development.

Your role is to:
- Provide highly personalized, actionable career advice
- Suggest projects, skills, and resources tailored to the user's goals
- Help users transition between roles or advance their current trajectory  
- Review resumes, technical answers, and career decisions
- Motivate and provide emotional support during career uncertainty

Personality: Professional yet warm. Direct and concise. You provide bullet points when listing items and use examples where helpful. You do NOT hallucinate job listings or company-specific data.

Always tailor your advice to be specific, not generic. When you don't have enough context about the user, ask a targeted clarifying question.
"""

def get_smart_fallback_response(message: str) -> str:
    """
    A rule-based smart fallback when the Gemini API is unavailable.
    """
    msg_lower = message.lower()
    
    if any(kw in msg_lower for kw in ["project", "build", "portfolio"]):
        return (
            "Great question! For maximum resume impact, I recommend these project types:\n\n"
            "• **Full-Stack App** — A complete SaaS product with auth, payments, and a real use case. Recruiters love seeing you shipped something end-to-end.\n"
            "• **API Integration Project** — Build a tool that aggregates data from 2-3 public APIs and exposes your own REST interface.\n"
            "• **AI/ML Mini-Model** — Train a simple classifier or regression model on a public dataset and deploy it via FastAPI.\n\n"
            "Want me to tailor this to your specific tech stack?"
        )
    elif any(kw in msg_lower for kw in ["resume", "cv", "linkedin"]):
        return (
            "Here are the most impactful resume improvements:\n\n"
            "• **Lead with metrics**: Change \"Built a feature\" → \"Built a feature that reduced load time by 40%\"\n"
            "• **One page rule**: For < 5 years of experience, keep it strictly one page\n"
            "• **Tech stack visibility**: Put your core skills in the first 10 lines\n"
            "• **GitHub link**: Make sure your profile is active with pinned repos\n\n"
            "Would you like me to review specific bullet points from your current resume?"
        )
    elif any(kw in msg_lower for kw in ["learn", "skill", "course", "study", "next"]):
        return (
            "Based on current market demand, here's your priority learning roadmap:\n\n"
            "**Week 1-2:** Strengthen your core — TypeScript fundamentals + async patterns\n"
            "**Week 3-4:** Backend depth — FastAPI or NestJS + database design\n"
            "**Week 5-8:** System design basics — caching, load balancing, API design patterns\n\n"
            "The biggest differentiator right now is being able to discuss *why* you made architectural decisions, not just what you built."
        )
    elif any(kw in msg_lower for kw in ["interview", "prep", "dsa", "algorithm", "leetcode"]):
        return (
            "For technical interview prep, here's a 4-week sprint plan:\n\n"
            "• **Weeks 1-2:** Arrays, Strings, Hashmaps, Two Pointers — solve 2-3 problems/day on LeetCode\n"
            "• **Week 3:** Trees, BFS/DFS, Dynamic Programming basics\n"
            "• **Week 4:** Mock interviews + behavioral (STAR format) practice\n\n"
            "Don't just solve problems — practice explaining your approach out loud. That's what interviewers actually evaluate."
        )
    elif any(kw in msg_lower for kw in ["salary", "negotiat", "offer", "pay"]):
        return (
            "Salary negotiation tips that work:\n\n"
            "• Never give a number first — ask what their budget range is\n"
            "• Research Glassdoor, Levels.fyi, and LinkedIn Salary for your role + location + YoE\n"
            "• Negotiate the full comp: base + equity + signing bonus + remote flexibility\n"
            "• A counter offer of 10-20% above the initial offer is completely standard\n\n"
            "What role and location are you targeting? I can give you a more specific range."
        )
    else:
        return (
            f"That's a great topic to explore! Let me give you a focused answer.\n\n"
            f"To give you the most personalized advice on **\"{message[:80]}\"**, it would help to know:\n\n"
            f"1. What is your current role or experience level?\n"
            f"2. What's your target role in the next 12-18 months?\n"
            f"3. Are there specific technologies or domains you're focused on?\n\n"
            f"Share those details and I'll craft a tailored action plan for you!"
        )


def generate_mentor_response(message: str, history: List[Dict[str, str]] = None) -> str:
    """
    Generate an AI mentor response using Gemini API with smart fallback.
    """
    api_key = os.getenv("GOOGLE_API_KEY") or os.getenv("GEMINI_API_KEY")
    
    if not api_key:
        return get_smart_fallback_response(message)
    
    try:
        import google.generativeai as genai
        
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel(
            model_name="gemini-1.5-flash",
            system_instruction=KORE_LOGIC_SYSTEM_PROMPT
        )
        
        # Build the chat history
        chat_history = []
        if history:
            for turn in history[-10:]:  # Last 10 turns for context window efficiency
                chat_history.append({
                    "role": "user" if turn.get("role") == "user" else "model",
                    "parts": [turn.get("content", "")]
                })
        
        chat = model.start_chat(history=chat_history)
        response = chat.send_message(message)
        return response.text
        
    except Exception as e:
        print(f"Gemini API error: {e}")
        return get_smart_fallback_response(message)
