from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database.database import get_db
from app.schemas.report import WeeklyReport, WeeklyReportCreate
from app.crud import report as crud_report

router = APIRouter(
    prefix="/reports",
    tags=["reports"],
)

@router.get("/user/{user_id}", response_model=List[WeeklyReport])
def read_user_reports(user_id: int, db: Session = Depends(get_db)):
    return crud_report.get_user_reports(db, user_id=user_id)

@router.post("/user/{user_id}", response_model=WeeklyReport)
def create_report_for_user(user_id: int, report: WeeklyReportCreate, db: Session = Depends(get_db)):
    return crud_report.create_user_report(db=db, report=report, user_id=user_id)
