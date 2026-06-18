import os
import sys
from datetime import datetime, timezone, timedelta

# Add app directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.database.database import SessionLocal, Base, engine
from app.database.models import User, Skill, Project, Roadmap, Internship, Progress, WeeklyReport

# Create tables
Base.metadata.create_all(bind=engine)

def seed_db():
    db = SessionLocal()
    
    # Check if user already exists
    user = db.query(User).filter(User.clerk_id == "seed_user_1").first()
    if user:
        print("Database already seeded!")
        db.close()
        return

    # 1. Create User
    user = User(
        clerk_id="seed_user_1",
        name="Alex Thorne",
        email="alex@example.com",
        profile_picture="",
        target_role="Full Stack Engineer",
        experience_level="Intermediate"
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    
    print(f"Created user: {user.name} with ID {user.id}")

    # 2. Create Progress
    progress = Progress(
        user_id=user.id,
        career_readiness_score=85.0,
        weekly_streak=14,
        learning_hours=42.5,
        placement_probability=78.0,
        xp_points=2450
    )
    db.add(progress)

    # 3. Create Skills
    skills_data = [
        {"name": "React", "proficiency_level": 90, "category": "Frontend", "is_verified": True},
        {"name": "Next.js", "proficiency_level": 85, "category": "Frontend", "is_verified": True},
        {"name": "Python", "proficiency_level": 75, "category": "Backend", "is_verified": True},
        {"name": "FastAPI", "proficiency_level": 60, "category": "Backend", "is_verified": False},
        {"name": "SQL", "proficiency_level": 80, "category": "Database", "is_verified": True},
    ]
    for skill in skills_data:
        db.add(Skill(user_id=user.id, **skill))

    # 4. Create Projects
    projects_data = [
        {
            "title": "E-Commerce Microservices",
            "description": "A scalable e-commerce backend using FastAPI and Docker.",
            "difficulty": "Advanced",
            "tech_stack": ["FastAPI", "Docker", "PostgreSQL", "Redis"],
            "resume_impact_score": 95,
            "portfolio_value_score": 90,
            "github_readiness_score": 85,
            "status": "In Progress"
        },
        {
            "title": "AI Image Generator UI",
            "description": "Frontend interface for an AI image generation API.",
            "difficulty": "Intermediate",
            "tech_stack": ["React", "Next.js", "TailwindCSS"],
            "resume_impact_score": 85,
            "portfolio_value_score": 88,
            "github_readiness_score": 92,
            "status": "Completed"
        }
    ]
    for project in projects_data:
        db.add(Project(user_id=user.id, **project))

    # 5. Create Roadmaps
    roadmap = Roadmap(
        user_id=user.id,
        target_role="Full Stack Engineer",
        duration_weeks=12,
        weeks_data=[
            {
                "week": 1,
                "focus": "Advanced React Patterns",
                "status": "completed",
                "modules": ["Custom Hooks", "Context API", "Performance Optimization"]
            },
            {
                "week": 2,
                "focus": "Backend Fundamentals",
                "status": "in_progress",
                "modules": ["FastAPI Basics", "SQLAlchemy", "Pydantic Models"]
            },
            {
                "week": 3,
                "focus": "Full Stack Integration",
                "status": "locked",
                "modules": ["CORS", "Authentication", "Deployment"]
            }
        ]
    )
    db.add(roadmap)

    # 6. Create Internships
    internships_data = [
        {
            "company": "TechFlow AI",
            "role": "Frontend Engineer Intern",
            "salary": "$8,000/mo",
            "location": "San Francisco, CA",
            "is_remote": True,
            "required_skills": ["React", "TypeScript", "Next.js"],
            "application_link": "https://example.com/apply1"
        },
        {
            "company": "DataSphere",
            "role": "Backend Intern",
            "salary": "$7,500/mo",
            "location": "New York, NY",
            "is_remote": False,
            "required_skills": ["Python", "SQL", "FastAPI"],
            "application_link": "https://example.com/apply2"
        }
    ]
    for internship in internships_data:
        db.add(Internship(**internship))

    # 7. Create Weekly Report
    report = WeeklyReport(
        user_id=user.id,
        week_start_date=datetime.now(timezone.utc) - timedelta(days=7),
        achievements_summary="Completed the Advanced React module and started FastAPI basics.",
        strengths=["Consistent learning schedule", "High completion rate on frontend tasks"],
        weaknesses=["Backend tasks taking longer than expected"],
        ai_suggestions="Focus more on API design patterns this week to speed up your backend progress.",
        motivation_message="You're doing great! Just 3 weeks away from full stack proficiency.",
        consistency_score=92,
        productivity_score=88
    )
    db.add(report)

    db.commit()
    print("Database seeded successfully with User, Progress, Skills, Projects, Roadmap, Internships, and Reports.")
    db.close()

if __name__ == "__main__":
    seed_db()
