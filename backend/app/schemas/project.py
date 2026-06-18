from pydantic import BaseModel
from typing import List, Optional

class ProjectBase(BaseModel):
    title: str
    description: str
    difficulty: str
    tech_stack: List[str]
    resume_impact_score: int
    portfolio_value_score: int
    github_readiness_score: int
    status: str = "Not Started"

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    difficulty: Optional[str] = None
    tech_stack: Optional[List[str]] = None
    resume_impact_score: Optional[int] = None
    portfolio_value_score: Optional[int] = None
    github_readiness_score: Optional[int] = None
    status: Optional[str] = None

class Project(ProjectBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
