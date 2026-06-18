from sqlalchemy.orm import Session
from app.database.models import Skill
from app.schemas.skill import SkillCreate

def get_user_skills(db: Session, user_id: int):
    return db.query(Skill).filter(Skill.user_id == user_id).all()

def add_user_skill(db: Session, user_id: int, skill: SkillCreate):
    db_skill = Skill(**skill.model_dump(), user_id=user_id)
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill

def remove_user_skill(db: Session, user_id: int, skill_id: int):
    db_skill = db.query(Skill).filter(Skill.id == skill_id, Skill.user_id == user_id).first()
    if db_skill:
        db.delete(db_skill)
        db.commit()
        return True
    return False
