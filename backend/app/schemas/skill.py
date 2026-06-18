from pydantic import BaseModel
from typing import Optional

class SkillBase(BaseModel):
    name: str
    proficiency_level: int
    category: Optional[str] = None
    is_verified: bool = False

class SkillCreate(SkillBase):
    pass

class Skill(SkillBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
