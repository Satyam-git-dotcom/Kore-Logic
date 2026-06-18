from sqlalchemy.orm import Session
from app.database import models
from app.schemas import report as report_schema

def get_user_reports(db: Session, user_id: int):
    return db.query(models.WeeklyReport).filter(models.WeeklyReport.user_id == user_id).all()

def create_user_report(db: Session, report: report_schema.WeeklyReportCreate, user_id: int):
    db_report = models.WeeklyReport(**report.dict(), user_id=user_id)
    db.add(db_report)
    db.commit()
    db.refresh(db_report)
    return db_report
