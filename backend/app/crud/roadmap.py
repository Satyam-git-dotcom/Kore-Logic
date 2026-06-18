from sqlalchemy.orm import Session
from app.database import models
from app.schemas import roadmap as roadmap_schema

def get_roadmaps(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Roadmap).offset(skip).limit(limit).all()

def get_user_roadmaps(db: Session, user_id: int):
    return db.query(models.Roadmap).filter(models.Roadmap.user_id == user_id).all()

def create_user_roadmap(db: Session, roadmap: roadmap_schema.RoadmapCreate, user_id: int):
    db_roadmap = models.Roadmap(**roadmap.dict(), user_id=user_id)
    db.add(db_roadmap)
    db.commit()
    db.refresh(db_roadmap)
    return db_roadmap
