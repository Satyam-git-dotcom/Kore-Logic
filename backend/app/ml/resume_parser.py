import os
import io
from PyPDF2 import PdfReader

def extract_text_from_pdf(pdf_bytes: bytes) -> str:
    """
    Extract text content from a PDF file in memory.
    """
    try:
        reader = PdfReader(io.BytesIO(pdf_bytes))
        text = ""
        for page in reader.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
        return text
    except Exception as e:
        print(f"Error parsing PDF: {e}")
        return ""

def mock_parse_resume_to_skills(text: str) -> list[str]:
    """
    In a real scenario, we would use an LLM (LangChain) to extract skills.
    Here we do a simple mock keyword search for demonstration.
    """
    common_skills = ["python", "javascript", "react", "typescript", "ui/ux", "figma", 
                     "sql", "machine learning", "data strategy", "user research"]
    
    extracted = []
    text_lower = text.lower()
    for skill in common_skills:
        if skill in text_lower:
            extracted.append(skill)
            
    return extracted
