from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class WeeklyReportBase(BaseModel):
    week_start_date: datetime
    achievements_summary: str
    strengths: List[str]
    weaknesses: List[str]
    ai_suggestions: str
    motivation_message: str
    consistency_score: int
    productivity_score: int

class WeeklyReportCreate(WeeklyReportBase):
    pass

class WeeklyReport(WeeklyReportBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True
