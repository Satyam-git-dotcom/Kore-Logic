from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database.database import get_db
from app.schemas.roadmap import Roadmap, RoadmapCreate
from app.crud import roadmap as crud_roadmap

router = APIRouter(
    prefix="/roadmaps",
    tags=["roadmaps"],
)

@router.get("/", response_model=List[Roadmap])
def read_roadmaps(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_roadmap.get_roadmaps(db, skip=skip, limit=limit)

@router.get("/user/{user_id}", response_model=List[Roadmap])
def read_user_roadmaps(user_id: int, db: Session = Depends(get_db)):
    return crud_roadmap.get_user_roadmaps(db, user_id=user_id)

@router.post("/user/{user_id}", response_model=Roadmap)
def create_roadmap_for_user(user_id: int, roadmap: RoadmapCreate, db: Session = Depends(get_db)):
    return crud_roadmap.create_user_roadmap(db=db, roadmap=roadmap, user_id=user_id)
