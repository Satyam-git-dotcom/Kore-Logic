from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database.database import get_db
from app.schemas.project import Project, ProjectCreate
from app.crud import project as crud_project

router = APIRouter(
    prefix="/projects",
    tags=["projects"],
)

@router.get("/", response_model=List[Project])
def read_projects(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_project.get_projects(db, skip=skip, limit=limit)

@router.get("/user/{user_id}", response_model=List[Project])
def read_user_projects(user_id: int, db: Session = Depends(get_db)):
    return crud_project.get_user_projects(db, user_id=user_id)

@router.post("/user/{user_id}", response_model=Project)
def create_project_for_user(user_id: int, project: ProjectCreate, db: Session = Depends(get_db)):
    return crud_project.create_user_project(db=db, project=project, user_id=user_id)
