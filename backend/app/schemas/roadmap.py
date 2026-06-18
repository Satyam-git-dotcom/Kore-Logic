from pydantic import BaseModel
from typing import List, Optional, Any
from datetime import datetime

class RoadmapBase(BaseModel):
    target_role: str
    duration_weeks: int = 12
    weeks_data: Any # Can be List[dict]

class RoadmapCreate(RoadmapBase):
    pass

class RoadmapUpdate(BaseModel):
    target_role: Optional[str] = None
    duration_weeks: Optional[int] = None
    weeks_data: Optional[Any] = None

class Roadmap(RoadmapBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True
