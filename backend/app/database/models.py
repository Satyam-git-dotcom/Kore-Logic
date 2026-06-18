from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey, DateTime, JSON, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    clerk_id = Column(String, unique=True, index=True, nullable=False)
    name = Column(String)
    email = Column(String, unique=True, index=True, nullable=False)
    profile_picture = Column(String)
    target_role = Column(String)
    experience_level = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    skills = relationship("Skill", back_populates="user")
    projects = relationship("Project", back_populates="user")
    roadmaps = relationship("Roadmap", back_populates="user")
    progress = relationship("Progress", back_populates="user")
    reports = relationship("WeeklyReport", back_populates="user")
    chats = relationship("MentorChat", back_populates="user")
    notifications = relationship("Notification", back_populates="user")
    achievements = relationship("Achievement", back_populates="user")

class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    name = Column(String, index=True)
    proficiency_level = Column(Integer) # 1-100
    is_verified = Column(Boolean, default=False)
    category = Column(String) # e.g., "Frontend", "AI", "Soft Skill"
    
    user = relationship("User", back_populates="skills")

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    description = Column(Text)
    difficulty = Column(String)
    tech_stack = Column(JSON) # List of tech stack strings
    resume_impact_score = Column(Integer)
    portfolio_value_score = Column(Integer)
    github_readiness_score = Column(Integer)
    status = Column(String, default="Not Started") # Not Started, In Progress, Completed
    
    user = relationship("User", back_populates="projects")

class Roadmap(Base):
    __tablename__ = "roadmaps"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    target_role = Column(String)
    duration_weeks = Column(Integer, default=12)
    weeks_data = Column(JSON) # Weekly breakdown of topics, resources, mini-projects
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    user = relationship("User", back_populates="roadmaps")

class Internship(Base):
    __tablename__ = "internships"

    id = Column(Integer, primary_key=True, index=True)
    company = Column(String)
    role = Column(String)
    salary = Column(String)
    location = Column(String)
    is_remote = Column(Boolean)
    required_skills = Column(JSON)
    application_link = Column(String)

class Progress(Base):
    __tablename__ = "progress"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    career_readiness_score = Column(Float, default=0.0)
    weekly_streak = Column(Integer, default=0)
    learning_hours = Column(Float, default=0.0)
    placement_probability = Column(Float, default=0.0)
    xp_points = Column(Integer, default=0)
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    user = relationship("User", back_populates="progress")

class WeeklyReport(Base):
    __tablename__ = "weekly_reports"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    week_start_date = Column(DateTime(timezone=True))
    achievements_summary = Column(Text)
    strengths = Column(JSON)
    weaknesses = Column(JSON)
    ai_suggestions = Column(Text)
    motivation_message = Column(Text)
    consistency_score = Column(Integer)
    productivity_score = Column(Integer)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    user = relationship("User", back_populates="reports")

class MentorChat(Base):
    __tablename__ = "mentor_chats"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    role = Column(String) # 'user' or 'ai'
    message = Column(Text)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
    
    user = relationship("User", back_populates="chats")

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    message = Column(Text)
    type = Column(String) # e.g., 'internship_match', 'roadmap_update'
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    user = relationship("User", back_populates="notifications")

class Achievement(Base):
    __tablename__ = "achievements"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    description = Column(Text)
    badge_icon_url = Column(String)
    earned_at = Column(DateTime(timezone=True), server_default=func.now())
    
    user = relationship("User", back_populates="achievements")
