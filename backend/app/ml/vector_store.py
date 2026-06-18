import os
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain_core.documents import Document

# Initialize embedding model (mocking with OpenAI if API key is present, otherwise skipping or mocking)
# For local development without an OpenAI key, we could use HuggingFace embeddings, but for now we'll set it up 
# to use OpenAIEmbeddings if possible, or fallback gracefully.

def get_vector_store():
    """
    Get or create the ChromaDB vector store.
    """
    # Use a local directory for ChromaDB storage
    persist_directory = "./chroma_db"
    
    # In a real app we need OPENAI_API_KEY
    # embeddings = OpenAIEmbeddings()
    # For mocking/placeholder since we don't have keys configured:
    class MockEmbeddings:
        def embed_documents(self, texts):
            return [[0.1] * 1536 for _ in texts]
        def embed_query(self, text):
            return [0.1] * 1536
            
    embeddings = MockEmbeddings()

    db = Chroma(persist_directory=persist_directory, embedding_function=embeddings)
    return db

def add_user_profile_to_db(user_id: int, text: str, metadata: dict = None):
    """
    Embed and store a user profile or resume in the vector DB.
    """
    db = get_vector_store()
    if metadata is None:
        metadata = {}
    metadata["user_id"] = user_id
    
    doc = Document(page_content=text, metadata=metadata)
    db.add_documents([doc])
    
def search_similar_profiles(query_text: str, k: int = 3):
    """
    Search for user profiles similar to a query (e.g. for matching).
    """
    db = get_vector_store()
    docs = db.similarity_search(query_text, k=k)
    return docs
