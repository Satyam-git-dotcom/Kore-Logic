<div align="center">

# 🚀 Kore Logic

### Build. Learn. Grow. Intelligently.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python)](https://www.python.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.0-4169E1?logo=postgresql)](https://www.postgresql.org/)
[![OpenAI](https://img.shields.io/badge/AI-OpenAI-412991?logo=openai)](https://openai.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**Kore Logic** is an AI-powered Career Hyper-Personalization Platform that helps students, fresh graduates, and professionals build personalized career journeys. By analyzing your unique profile, skills, goals, and experience, Kore Logic intelligently generates personalized career roadmaps, skill gap analyses, project recommendations, internship matches, and provides continuous AI mentoring.

[Live Demo](https://kore-logic.vercel.app) • [Frontend URL](https://kore-logic.vercel.app) • [Backend URL](#) • [Documentation URL](#) • [Presentation URL](#) • [Video Demo URL](#)

</div>

---

## 📑 Table of Contents

1. [Problem Statement](#-problem-statement)
2. [Solution](#-solution)
3. [Features](#-features)
4. [Architecture Diagram](#-architecture-diagram)
5. [System Flow Diagram](#-system-flow-diagram)
6. [Screenshots](#-screenshots)
7. [Technology Stack](#-technology-stack)
8. [Folder Structure](#-folder-structure)
9. [Core Modules](#-core-modules)
10. [Database Schema](#-database-schema)
11. [API Documentation](#-api-documentation)
12. [AI Components](#-ai-components)
13. [RAG Architecture](#-rag-architecture)
14. [User Journey](#-user-journey)
15. [KPI Metrics](#-kpi-metrics)
16. [Gamification System](#-gamification-system)
17. [Security](#-security)
18. [Performance Optimization](#-performance-optimization)
19. [Accessibility](#-accessibility)
20. [Installation](#-installation)
21. [Environment Variables](#-environment-variables)
22. [Deployment](#-deployment)
23. [Roadmap](#-roadmap)
24. [Contributors](#-contributors)
25. [License](#-license)
26. [Acknowledgements](#-acknowledgements)

---

## 🚨 Problem Statement

The modern job market is highly dynamic and fiercely competitive, yet the educational tools provided to aspiring professionals remain fundamentally static. 

- **Skill Gaps:** Educational curriculums frequently lag behind industry demands, leaving students completely unaware of the specific frameworks, languages, and methodologies modern employers require.
- **Lack of Personalization:** Students currently receive generic learning paths and generalized career advice that do not adapt to their individual skills, specific goals, unique strengths, or real-time market demands.
- **Career Confusion:** Navigating thousands of potential career trajectories without a data-backed compass leads to decision paralysis. 
- **Information Overload:** The internet offers infinite learning resources, but no structured, curated path that filters the noise based on the user's specific career target.
- **Low Internship Success Rates:** Students apply to hundreds of generic listings without knowing if they meet the specific technical prerequisites, resulting in massive rejection rates and demoralization.

---

## 💡 Solution

**Kore Logic** completely revolutionizes the career preparation lifecycle by introducing **AI-driven hyper-personalization**. 

Instead of searching for roadmaps, Kore Logic *builds them for you*. By ingesting your current resume, skill set, and target roles, the AI engine establishes a hyper-accurate baseline of your capabilities. Kore Logic then dynamically generates:
- **Career Roadmaps:** Step-by-step learning modules precisely tailored to bridge the gap between your current skills and your dream job.
- **Project Recommendations:** Context-aware, portfolio-building projects that specifically target your weakest technical areas.
- **Internship Matches:** Intelligent matching algorithms that pair your validated skill vectors against real-world internship descriptions, providing a definitive match probability.
- **Weekly Mentoring:** An always-on, LangChain-powered AI Mentor that contextually understands your progress, answers technical queries, and guides your systemic growth.
- **Career Predictions:** Statistical forecasting models that predict your career readiness and interview success probability based on your ongoing platform engagement.

---

## ✨ Features

Kore Logic is packed with enterprise-grade features designed to accelerate career growth:

- 🧠 **AI Profile Builder:** Automatically parses resumes, extracts core competencies using NLP, and builds a multidimensional user profile.
- 📊 **Skill Gap Analyzer:** Compares current capabilities against real-time industry requirements to highlight critical deficiencies.
- 🗺️ **Dynamic Learning Path Generator:** Crafts week-by-week, actionable study plans tailored to the user's pace and target role.
- 🏗️ **AI Project Recommendation Engine:** Suggests customized projects (with architecture blueprints) that directly build required skills.
- 🎯 **Internship Matching Engine:** Vectorizes job descriptions and user profiles to generate a precise "Match Percentage" and custom application strategies.
- 🤖 **AI Mentor:** A conversational agent integrated with RAG (Retrieval-Augmented Generation) that knows the user's entire learning history and provides personalized tutoring.
- 📈 **Career Success Predictor:** Employs predictive analytics to score the user's readiness for specific corporate roles.
- 📅 **Weekly Reports:** Automated generative reports summarizing progress, XP gained, and focus areas for the upcoming week.
- 🖥️ **Dashboard Analytics:** A visually stunning, data-dense command center tracking streaks, active learning hours, and readiness metrics.
- 🎮 **Gamification:** A comprehensive reward ecosystem featuring XP, weekly streaks, badges, and competitive milestones to drive continuous engagement.

---

## 🏗️ Architecture Diagram

Kore Logic is built on a scalable, decoupled, microservices-inspired architecture.

```mermaid
graph TD
    %% User & Edge
    User([User Client]) -->|HTTPS / WSS| CDN[Vercel Edge Network]
    CDN --> Frontend[Next.js Frontend React]

    %% Frontend to Backend
    Frontend -->|REST API Calls| API_Gateway[FastAPI Backend Gateway]

    %% Backend Services
    subgraph Core Backend Services
        API_Gateway --> Auth[Authentication & AuthZ]
        API_Gateway --> CRUD[CRUD Controllers]
        API_Gateway --> ML_Router[AI / ML Router]
    end

    %% Database Layer
    CRUD --> PostgreSQL[(PostgreSQL Database)]
    Auth --> Clerk([Clerk Identity Auth])

    %% AI Pipeline
    subgraph AI Engine & RAG Pipeline
        ML_Router --> Parsing[Resume Parser NLP]
        ML_Router --> LLM_Mentor[AI Mentor Service]
        ML_Router --> Predictor[Career Readiness Predictor]
        
        LLM_Mentor --> LangChain[LangChain Framework]
        LangChain --> Embedding[Text Embedding Models]
        Embedding --> ChromaDB[(ChromaDB Vector Store)]
        LangChain --> OpenAI[OpenAI GPT-4o]
    end
```

---

## 🔄 System Flow Diagram

The end-to-end user workflow mapping the data lifecycle:

```mermaid
flowchart TD
    A([User Signs Up]) --> B[Upload Resume]
    B --> C{AI Resume Parser}
    
    C -->|Extracts| D[Identified Skills]
    C -->|Extracts| E[Experience Level]
    
    D & E --> F[Skill Gap Analysis Engine]
    
    F -->|Generates| G[Dynamic Career Roadmap]
    F -->|Generates| H[Project Recommendations]
    
    G & H --> I[Student Dashboard]
    
    I --> J[User Engages in Learning]
    I --> K[User Completes Projects]
    
    J & K --> L[AI Engine Updates Vectors]
    
    L --> M[Internship Matching Engine]
    L --> N[Career Predictor updates Score]
    
    M --> O[Targeted Internship Applications]
    N --> P[Weekly Progress Reports]
    
    I <-->|Real-time Tutoring| Q[AI Mentor Chat]
```

---


## 🛠️ Technology Stack

Kore Logic leverages a bleeding-edge, production-ready technology stack optimized for scale, speed, and AI integration.

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | Next.js 15, React 19 | Server-Side Rendering (SSR), API routes, optimized core framework. |
| **Language** | TypeScript | End-to-end type safety, preventing runtime errors. |
| **Styling** | TailwindCSS, ShadCN UI | Utility-first CSS framework and accessible, unstyled UI components. |
| **Animations** | Framer Motion | Fluid, physics-based micro-interactions and page transitions. |
| **Backend Core** | FastAPI (Python 3.12) | High-performance async REST framework with automatic OpenAPI docs. |
| **AI Models** | OpenAI (GPT-4o) | Core generative engine for mentoring and roadmaps. |
| **AI Orchestration** | LangChain | Managing LLM prompts, chains, and memory for the AI Mentor. |
| **Data Science** | Scikit-learn, Pandas, NumPy | Data processing, resume parsing, and predictive heuristics. |
| **Vector Database** | ChromaDB | High-dimensional embedding storage for semantic RAG search. |
| **Relational Database** | PostgreSQL (Alembic / SQLAlchemy) | ACID-compliant persistent storage for user state and progress. |
| **Authentication** | Clerk | JWT-based secure identity and session management. |
| **Data Visualization** | Recharts | Performant SVG chart rendering for analytics and skill gaps. |
| **Deployment** | Vercel (Front), Render (Back) | Edge-network hosting and containerized backend deployment. |

---

## 📁 Folder Structure

```text
kore-logic/
├── frontend/
│   ├── public/               # Static assets, SVG icons, images
│   ├── src/
│   │   ├── app/              # Next.js 15 App Router (Pages & Layouts)
│   │   ├── components/       # Reusable UI elements (ShadCN, Custom)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # API clients, utility functions, constants
│   │   └── types/            # Global TypeScript interfaces
│   ├── tailwind.config.ts    # Design tokens and theme configuration
│   └── package.json          # Node dependencies
│
├── backend/
│   ├── alembic/              # Database migration scripts
│   ├── app/
│   │   ├── crud/             # Database queries and mutations
│   │   ├── database/         # SQLAlchemy connection and ORM Models
│   │   ├── ml/               # AI modules: RAG, LangChain, Predictors
│   │   ├── routers/          # FastAPI REST endpoints
│   │   └── schemas/          # Pydantic validation models
│   ├── main.py               # FastAPI application entry point
│   ├── seed.py               # Database seed scripts
│   └── requirements.txt      # Python dependencies
│
└── stitch_kore_logic_ai_platform/  # Source of truth UI designs & mockups
```

---

## 🧩 Core Modules

### AI Profile Builder
Acts as the onboarding gateway. It ingests a user's uploaded PDF/DOCX resume, utilizes PyPDF and NLP heuristics to extract technical skills, soft skills, and experience levels, and creates a vectorized digital twin of the candidate in the database.

### Skill Gap Analyzer
Maps the user's extracted digital twin against real-time industry vectors (e.g., standard requirements for a "Senior Frontend Engineer"). It outputs a mathematical delta, highlighting exact technologies the user needs to learn.

### Learning Path Generator
Translates the skill delta into an actionable, chronological syllabus. It breaks down complex topics into week-by-week sprints, complete with resource links, estimated hours, and milestones.

### Project Engine
Theoretical knowledge is useless without practical application. This module analyzes the user's current roadmap and generates custom project ideas (e.g., "Build a Rust-based WebAssembly image filter") that specifically force the user to utilize their newly acquired skills.

### Internship Engine
Continuously scrapes or ingests internship listings, embeds the job descriptions into ChromaDB, and performs cosine similarity searches against the user's skill vector. It provides a "Match %" and dynamically generates a personalized cover letter highlighting why the user's specific roadmap makes them a fit.

### AI Mentor
The crown jewel of the platform. A persistent, context-aware chatbot that utilizes LangChain's conversational memory. It knows what project the user is working on, what their skill gaps are, and provides highly specific, non-generic technical assistance and code reviews.

### Career Predictor
A Scikit-learn powered heuristic engine that analyzes weekly streaks, project completion rates, and skill diversity to output a "Career Readiness Score" (0-100%). This provides users with a tangible, gamified metric of their employability.

### Weekly Reports
A scheduled CRON-like module that summarizes the week's data. It prompts the LLM to generate a motivational, human-readable summary of what the user achieved, where they slacked off, and what the primary objective is for the following week.

### Dashboard
The central command interface built with Next.js and Recharts. It aggregates data from all modules to display streaks, readiness charts, active roadmap tasks, and AI notifications in a single, glanceable glassmorphic UI.

---

## 🗄️ Database Schema

Kore Logic utilizes a highly normalized PostgreSQL database. Below are the core entities.

### `Users` Table
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | Integer (PK) | Unique internal identifier. |
| `clerk_id` | String | External authentication ID provided by Clerk. |
| `email` | String | User's primary contact email. |
| `name` | String | User's full name. |
| `target_role` | String | The specific career the user is aiming for (e.g., "Data Scientist"). |

### `Skills` Table
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | Integer (PK) | Unique skill identifier. |
| `user_id` | Integer (FK) | References `Users.id`. |
| `name` | String | Name of the skill (e.g., "React", "Python"). |
| `proficiency` | Integer | Score from 1-100 indicating mastery. |
| `is_verified` | Boolean | Whether the skill was verified by an AI project completion. |

### `Roadmaps` Table
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | Integer (PK) | Unique roadmap identifier. |
| `user_id` | Integer (FK) | References `Users.id`. |
| `title` | String | e.g., "Mastering System Design". |
| `content` | Text | JSON/Markdown string of the generated syllabus. |
| `status` | String | Enum: `active`, `completed`, `paused`. |

### `Projects` Table
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | Integer (PK) | Unique project identifier. |
| `user_id` | Integer (FK) | References `Users.id`. |
| `title` | String | Project name. |
| `description` | Text | Technical requirements and architecture. |
| `difficulty` | String | Enum: `beginner`, `intermediate`, `advanced`. |
| `status` | String | Enum: `not_started`, `in_progress`, `completed`. |

### `Internships` Table
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | Integer (PK) | Unique job identifier. |
| `company` | String | Employer name. |
| `role` | String | Job title. |
| `match_score` | Integer | AI-calculated affinity score (0-100). |
| `status` | String | Enum: `saved`, `applied`, `interviewing`, `rejected`. |

### `Progress` (Analytics) Table
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | Integer (PK) | Analytics record ID. |
| `user_id` | Integer (FK) | References `Users.id`. |
| `weekly_streak` | Integer | Consecutive weeks of meeting learning goals. |
| `learning_hours` | Integer | Total active hours spent on the platform. |

### `MentorChats` Table
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | Integer (PK) | Message identifier. |
| `user_id` | Integer (FK) | References `Users.id`. |
| `role` | String | Enum: `user` or `ai`. |
| `content` | Text | The actual message content. |
| `timestamp` | DateTime | When the message was sent. |

*(Additional tables for Achievements, Notifications, and WeeklyReports follow a similarly normalized structure).*

---

## 🔌 API Documentation

Kore Logic's backend exposes a highly RESTful API powered by FastAPI. 

### `POST /api/ai/parse-resume`
Extracts skills and profile data from a resume file.
**Request:** `multipart/form-data` with a PDF file.
**Response:**
```json
{
  "extracted_skills": ["Python", "Machine Learning", "AWS"],
  "text_preview": "Experienced data enthusiast..."
}
```

### `POST /api/ai/predict`
Generates career readiness predictions based on user metrics.
**Request:**
```json
{
  "skills": ["React", "TypeScript", "Node.js"],
  "projects_count": 4,
  "streak_days": 12
}
```
**Response:**
```json
{
  "readiness_score": 88.5,
  "internship_match_probability": 76.2
}
```

### `POST /api/ai/chat`
Interacts with the AI Career Mentor.
**Request:**
```json
{
  "user_id": 1,
  "message": "Can you explain how React Server Components work?",
  "history": [
    {"role": "user", "content": "I'm starting a new Next.js project."}
  ]
}
```
**Response:**
```json
{
  "reply": "React Server Components (RSC) allow you to render components exclusively on the server..."
}
```

### `GET /api/users/{user_id}`
Retrieves a highly aggregated overview of the user's dashboard data.
**Response:** User object including nested `skills`, `projects`, and `progress`.

---

## 🤖 AI Components

The intelligence of Kore Logic is driven by several distinct algorithmic modules:

1. **Skill Gap Analysis Model:**
   - **Inputs:** User's current skill array; Target Job Title text.
   - **Methodology:** The system uses zero-shot classification and semantic matching to identify missing keywords from the user's array relative to an industry standard vector.
   - **Outputs:** An array of "Delta Skills" ranked by priority.

2. **Career Readiness Predictor:**
   - **Inputs:** Project count, skill count, weekly streak.
   - **Methodology:** A heuristic weighting algorithm (currently simulating a Scikit-learn pipeline) that calculates a weighted sum of continuous engagement versus static technical knowledge.
   - **Outputs:** A percentage score representing hireability.

3. **Internship Matching Algorithm:**
   - **Inputs:** User's skill embeddings; Job description embeddings.
   - **Methodology:** Calculates the Cosine Similarity between the high-dimensional vector representations of the user's profile and the job posting.
   - **Outputs:** A match probability percentage.

4. **AI Mentor:**
   - **Inputs:** User chat input, previous conversation history, user metadata (skills, active projects).
   - **Methodology:** Prompt engineering via LangChain. The LLM is instructed with a highly specific system prompt to act as an encouraging, expert senior developer, constraining it from giving direct answers and instead guiding the user via the Socratic method.
   - **Outputs:** Contextualized conversational text.

---

## 🧠 RAG Architecture

Kore Logic implements a **Retrieval-Augmented Generation (RAG)** pipeline to ensure the AI Mentor doesn't hallucinate and provides data specifically relevant to the user's exact state.

1. **Document Embeddings:** The user's parsed resume, active roadmaps, and completed project descriptions are chunked and embedded using OpenAI's `text-embedding-3-small` model.
2. **ChromaDB:** These vectors are stored in a local/cloud ChromaDB instance categorized by `user_id`.
3. **Knowledge Base Retrieval:** When a user asks a question (e.g., *"How do I implement auth in my current project?"*), LangChain transforms the query into a vector, searches ChromaDB for the highest similarity chunks (e.g., the user's specific Next.js project description).
4. **Conversation Memory:** The retrieved context is injected into the LangChain `ConversationBufferMemory` alongside the recent chat history.
5. **OpenAI Synthesis:** The enriched prompt is sent to `gpt-4o`, resulting in an answer specifically tailored to the user's project architecture, rather than generic internet advice.

---

## 🚶 User Journey

A typical student's experience on Kore Logic:

1. **Sign Up:** User authenticates securely via Clerk.
2. **Upload Resume:** User drops their PDF resume into the AI Profile Builder.
3. **Analyze Skills:** The platform instantly visualizes what the user knows and what they are missing for their target role.
4. **Generate Roadmap:** A custom 12-week syllabus is generated.
5. **Build Projects:** The user is assigned an AI-generated project (e.g., a Fullstack SaaS app) to prove their skills.
6. **Interact with AI Mentor:** While coding, the user hits a roadblock and asks the AI Mentor for debugging help.
7. **Apply for Internships:** The user views their recommended internships, sorted by a 90%+ match rate, and applies using an AI-generated cover letter.
8. **Receive Weekly Reports:** On Sunday, the user receives a dashboard notification summarizing their 5-day streak and XP gained.
9. **Improve Career Readiness Score:** The user watches their Career Readiness metric cross the 85% threshold, indicating high interview probability.

---

## 📊 KPI Metrics

Kore Logic tracks critical metrics to quantify user growth:

| Metric | Description | Target / Impact |
| :--- | :--- | :--- |
| **Career Readiness Score** | Aggregate percentage of employability. | >80% indicates interview readiness. |
| **Skill Completion Rate** | Percentage of roadmap milestones finished. | Tracks learning velocity. |
| **Learning Consistency** | Days active per week. | Primary driver of knowledge retention. |
| **Internship Conversion Rate** | Ratio of matched applications to interviews. | Validates the matching algorithm's accuracy. |
| **Weekly Engagement** | Hours spent active on the dashboard. | Measures platform stickiness. |
| **Portfolio Strength** | Quantity and complexity of completed projects. | Determines practical capability. |
| **Placement Probability** | ML-predicted likelihood of receiving an offer. | Ultimate success indicator. |

---

## 🎮 Gamification System

To maintain motivation over multi-month learning journeys, Kore Logic employs sophisticated gamification mechanics:

- **XP (Experience Points):** Awarded for every roadmap node completed, project submitted, or chat session engaged.
- **Weekly Streaks:** Visible fire icons (🔥) represent consecutive days of learning. Breaking a streak triggers loss aversion psychology to maintain daily logins.
- **Badges:** Unlockable digital assets (e.g., "Frontend Architect", "Debug Master") achieved by reaching specific milestones.
- **Milestones:** Significant checkpoints (e.g., "First Project Deployed", "50 Hours Learned") that trigger celebratory micro-animations on the UI.
- **Reward System:** Accumulating XP contributes directly to the "Career Readiness Score", translating virtual points into real-world confidence.

---

## 🔒 Security

Enterprise-grade security principles are baked into the core of Kore Logic:

- **Authentication:** Handled entirely by **Clerk**, utilizing secure JWT tokens and OAuth providers, completely abstracting password handling away from our database.
- **Protected Routes:** Next.js Middleware intercepts all requests, ensuring unauthenticated users are seamlessly redirected away from dashboard pages.
- **Rate Limiting:** FastAPI middleware implements aggressive rate limiting on AI endpoints (e.g., `/api/ai/chat`) to prevent API abuse and control OpenAI token costs.
- **Input Validation:** Every single backend payload is strictly validated using **Pydantic** schemas. Malformed data is rejected before it reaches business logic.
- **SQL Injection Prevention:** Utilization of the **SQLAlchemy ORM** ensures all database queries are parameterized, neutralizing SQLi threats.
- **XSS Protection:** React/Next.js automatically escapes user inputs in the DOM.
- **Environment Variables:** All secrets (API keys, DB URIs) are securely managed via `.env` files and never committed to version control.

---

## ⚡ Performance Optimization

Kore Logic is built for speed, targeting perfect Lighthouse scores:

- **Code Splitting:** Next.js automatically chunks JavaScript bundles per route, ensuring users only download the code they immediately need.
- **Image Optimization:** Utilization of the `<Image />` component for automatic WebP conversion, resizing, and lazy loading.
- **Memoization:** Strategic use of React's `useMemo` and `useCallback` to prevent unnecessary re-renders in complex dashboards.
- **Caching:** Fetch requests in Next.js utilize advanced caching strategies (`force-cache`, `revalidate`) to serve static content instantly.
- **Database Indexing:** Primary keys and frequently queried fields (like `user_id`) are indexed in PostgreSQL for O(1) or O(log N) lookup times.
- **Pagination:** Large datasets (like historical Mentor chats or comprehensive internship lists) are paginated to minimize payload sizes.

---

## ♿ Accessibility

The web is for everyone. Kore Logic adheres to strict WCAG guidelines:

- **Semantic HTML:** Proper use of `<nav>`, `<main>`, `<article>`, and logical heading hierarchies.
- **Keyboard Navigation:** Every interactive element is reachable and actionable via the `Tab` and `Enter` keys.
- **ARIA Labels:** Complex custom UI components (like dropdowns and modals) utilize ARIA attributes to describe state to assistive technologies.
- **Color Contrast:** The dark and light mode color palettes (designed in Figma) mathematically ensure high contrast ratios for readability.
- **Responsive Design:** Fluid typography and flex/grid layouts ensure the platform is 100% functional on mobile devices, tablets, and massive ultrawide monitors.

---

## 🚀 Installation

Follow these steps to run Kore Logic locally.

### Prerequisites
- Node.js 18+
- Python 3.10+
- PostgreSQL database

### 1. Clone the Repository
```bash
git clone https://github.com/Satyam-git-dotcom/Kore-Logic.git
cd Kore-Logic
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:3000`.

### 3. Backend Setup
Open a new terminal window.
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```

### 4. Database Initialization
Run Alembic migrations to set up your PostgreSQL schema.
```bash
alembic upgrade head
# Optionally seed the database with mock data
python seed.py
```

### 5. Run Backend Server
```bash
uvicorn app.main:app --reload --port 8000
```
The backend API will be available at `http://localhost:8000`. Swagger documentation can be viewed at `http://localhost:8000/docs`.

---

## 🔑 Environment Variables

Create a `.env` file in the `backend/` directory and a `.env.local` file in the `frontend/` directory.

**Backend (`backend/.env`):**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/kore_logic
OPENAI_API_KEY=sk-your-openai-api-key-here
CLERK_SECRET_KEY=sk_test_your-clerk-secret
CHROMADB_URL=http://localhost:8000
```

**Frontend (`frontend/.env.local`):**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your-clerk-publishable-key
```

---

## ☁️ Deployment

Kore Logic is engineered for modern cloud infrastructure:

- **Frontend -> Vercel:** Continuous integration via Vercel automatically builds and deploys the Next.js frontend to a global Edge Network upon every push to the `main` branch.
- **Backend -> Render:** The FastAPI application is containerized and hosted on Render as a managed Web Service, ensuring high availability and auto-scaling capabilities.
- **Database -> Supabase / AWS RDS:** A managed PostgreSQL instance handles data persistence with automated daily backups.

---

## 🛣️ Roadmap

**Version 1.0 (Current)**
- [x] Comprehensive UI/UX implementation.
- [x] Basic Resume Parsing and AI Mentoring.
- [x] Core Dashboard Analytics and CRUD functionality.

**Version 2.0 (Next Quarter)**
- [ ] Integration with GitHub API to automatically verify user code commits against AI project recommendations.
- [ ] Live real-time collaborative coding environments within the browser.
- [ ] Automated Mock Interviews using OpenAI's Voice API.

**Version 3.0 (Future Enhancements)**
- [ ] B2B Enterprise portal allowing companies to source candidates directly based on validated Kore Logic scores.
- [ ] Decentralized credentials (Web3) for verified skill badges.

---

## 👨‍💻 Contributors

**Primary Developer:**
- **Satyam**

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

Kore Logic was made possible by the incredible open-source community and state-of-the-art developer tooling:

- [OpenAI](https://openai.com/) for unparalleled generative intelligence.
- [LangChain](https://www.langchain.com/) for robust LLM orchestration.
- [ChromaDB](https://www.trychroma.com/) for blazing fast vector retrieval.
- [Clerk](https://clerk.com/) for flawless authentication developer experience.
- [Vercel](https://vercel.com/) & [Next.js](https://nextjs.org/) for defining the modern web.
- [Render](https://render.com/) & [FastAPI](https://fastapi.tiangolo.com/) for frictionless backend infrastructure.

---
<div align="center">
<i>Built with ❤️ for the future of learning.</i>
</div>
