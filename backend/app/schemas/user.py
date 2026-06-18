from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from .skill import Skill

class ProgressBase(BaseModel):
    career_readiness_score: float
    placement_probability: float
    weekly_streak: int
    learning_hours: float
    xp_points: int

class Progress(ProgressBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True

class UserBase(BaseModel):
    name: Optional[str] = None
    email: str
    clerk_id: str
    target_role: Optional[str] = None
    experience_level: Optional[str] = None
    profile_picture: Optional[str] = None

class UserCreate(UserBase):
    pass

class UserUpdate(BaseModel):
    name: Optional[str] = None
    target_role: Optional[str] = None
    experience_level: Optional[str] = None
    profile_picture: Optional[str] = None

class User(UserBase):
    id: int
    created_at: datetime
    skills: List[Skill] = []
    progress: List[Progress] = []

    class Config:
        from_attributes = True
