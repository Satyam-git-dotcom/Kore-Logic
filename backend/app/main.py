from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database.database import engine, Base

# Create all tables (In production, use Alembic migrations instead)
# Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Kore Logic API",
    description="Backend API for Kore Logic AI Career Platform",
    version="1.0.0"
)

# CORS middleware for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.routers import ai, users, projects, roadmaps, internships, reports
app.include_router(ai.router)
app.include_router(users.router)
app.include_router(projects.router)
app.include_router(roadmaps.router)
app.include_router(internships.router)
app.include_router(reports.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Kore Logic API"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
