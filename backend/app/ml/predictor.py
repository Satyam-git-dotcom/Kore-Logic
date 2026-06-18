import random
from typing import Dict, List

class CareerSuccessPredictor:
    """
    Mock model for predicting Career Success Readiness.
    In the future, this will be replaced with a scikit-learn model trained on real placement data.
    """
    
    def __init__(self):
        self.model_version = "mock-v1.0"

    def predict_readiness(self, user_profile: Dict) -> int:
        """
        Calculates a mock career readiness score (0-100%).
        
        Uses basic heuristics based on:
        - Number of completed projects
        - Skill completion percentage
        - Weekly consistency streak
        - Portfolio strength
        """
        
        # Base probability
        base_score = 30
        
        # Heuristics extraction
        projects_completed = user_profile.get("projects_completed", 0)
        skill_coverage = user_profile.get("skill_coverage_percentage", 0)
        streak_days = user_profile.get("streak_days", 0)
        has_portfolio = user_profile.get("has_portfolio", False)
        
        # Simple point calculations
        project_points = min(projects_completed * 5, 25) # Max 25 points for projects
        skill_points = int(skill_coverage * 0.3)         # Max 30 points for skills
        streak_points = min(streak_days * 0.5, 10)       # Max 10 points for consistency
        portfolio_points = 5 if has_portfolio else 0     # 5 bonus points
        
        # Add random variance (+/- 3%)
        variance = random.randint(-3, 3)
        
        final_score = base_score + project_points + skill_points + streak_points + portfolio_points + variance
        
        # Clamp between 0 and 100
        return max(0, min(100, int(final_score)))

    def predict_internship_match(self, user_skills: List[str], required_skills: List[str]) -> Dict[str, float]:
        """
        Predicts how well a user matches an internship based on skill overlap.
        """
        if not required_skills:
            return {"match_percentage": 0.0, "skill_gap_count": 0}
            
        user_skills_set = set([s.lower() for s in user_skills])
        required_skills_set = set([s.lower() for s in required_skills])
        
        intersection = user_skills_set.intersection(required_skills_set)
        match_ratio = len(intersection) / len(required_skills_set)
        
        return {
            "match_percentage": round(match_ratio * 100, 1),
            "skill_gap_count": len(required_skills_set) - len(intersection),
            "missing_skills": list(required_skills_set - user_skills_set)
        }

# Singleton instance for easy import
predictor = CareerSuccessPredictor()
