from sqlalchemy.orm import Session
from app.database import models
from app.schemas import internship as internship_schema

def get_internships(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Internship).offset(skip).limit(limit).all()

def create_internship(db: Session, internship: internship_schema.InternshipCreate):
    db_internship = models.Internship(**internship.dict())
    db.add(db_internship)
    db.commit()
    db.refresh(db_internship)
    return db_internship
