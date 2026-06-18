export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface PredictorRequest {
  skills: string[];
  projects_count: number;
  streak_days: number;
}

export interface PredictorResponse {
  readiness_score: number;
  internship_match_probability: number;
}

export const fetchAiPredictions = async (
  skills: string[],
  projectsCount: number,
  streakDays: number
): Promise<PredictorResponse> => {
  try {
    const response = await fetch(`${API_URL}/ai/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        skills,
        projects_count: projectsCount,
        streak_days: streakDays,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch AI predictions:', error);
    // Return mock fallback data if backend is not available
    return {
      readiness_score: 85,
      internship_match_probability: 75,
    };
  }
};

export const fetchUser = async (userId: number = 1) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
};

export const fetchProjects = async (userId: number = 1) => {
  try {
    const response = await fetch(`${API_URL}/projects/user/${userId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};

export const fetchRoadmaps = async (userId: number = 1) => {
  try {
    const response = await fetch(`${API_URL}/roadmaps/user/${userId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch roadmaps:', error);
    return [];
  }
};

export const fetchInternships = async () => {
  try {
    const response = await fetch(`${API_URL}/internships/`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch internships:', error);
    return [];
  }
};

export const fetchReports = async (userId: number = 1) => {
  try {
    const response = await fetch(`${API_URL}/reports/user/${userId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch reports:', error);
    return [];
  }
};

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

export const sendChatMessage = async (
  message: string,
  history: ChatMessage[] = [],
  userId: number = 2
): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/ai/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history, user_id: userId }),
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error('Failed to send chat message:', error);
    return "I'm having trouble connecting right now. Please try again in a moment.";
  }
};

export const fetchChatHistory = async (userId: number = 2): Promise<ChatMessage[]> => {
  try {
    const response = await fetch(`${API_URL}/ai/chat/history/${userId}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data.map((m: { role: 'user' | 'ai', content: string }) => ({ role: m.role, content: m.content }));
  } catch (error) {
    console.error('Failed to fetch chat history:', error);
    return [];
  }
};

export const uploadResume = async (file: File): Promise<{ extracted_skills: string[]; text_preview: string } | null> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${API_URL}/ai/parse-resume`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to upload resume:', error);
    return null;
  }
};
