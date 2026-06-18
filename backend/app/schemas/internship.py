from pydantic import BaseModel
from typing import List, Optional

class InternshipBase(BaseModel):
    company: str
    role: str
    salary: str
    location: str
    is_remote: bool
    required_skills: List[str]
    application_link: str

class InternshipCreate(InternshipBase):
    pass

class InternshipUpdate(BaseModel):
    company: Optional[str] = None
    role: Optional[str] = None
    salary: Optional[str] = None
    location: Optional[str] = None
    is_remote: Optional[bool] = None
    required_skills: Optional[List[str]] = None
    application_link: Optional[str] = None

class Internship(InternshipBase):
    id: int

    class Config:
        from_attributes = True
