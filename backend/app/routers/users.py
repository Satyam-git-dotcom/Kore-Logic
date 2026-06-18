from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database.database import get_db
from app.schemas.user import User, UserCreate, UserUpdate
from app.schemas.skill import Skill, SkillCreate
from app.crud import user as crud_user
from app.crud import skill as crud_skill

router = APIRouter(
    prefix="/users",
    tags=["users"],
)

@router.get("/{user_id}", response_model=User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud_user.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@router.post("/", response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = crud_user.get_user_by_clerk_id(db, clerk_id=user.clerk_id)
    if db_user:
        raise HTTPException(status_code=400, detail="User already registered")
    return crud_user.create_user(db=db, user=user)

@router.put("/{user_id}", response_model=User)
def update_user(user_id: int, user_update: UserUpdate, db: Session = Depends(get_db)):
    db_user = crud_user.update_user(db, user_id, user_update)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

# Skill endpoints nested under user
@router.get("/{user_id}/skills", response_model=List[Skill])
def read_user_skills(user_id: int, db: Session = Depends(get_db)):
    return crud_skill.get_user_skills(db, user_id=user_id)

@router.post("/{user_id}/skills", response_model=Skill)
def add_skill(user_id: int, skill: SkillCreate, db: Session = Depends(get_db)):
    db_user = crud_user.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud_skill.add_user_skill(db=db, user_id=user_id, skill=skill)
