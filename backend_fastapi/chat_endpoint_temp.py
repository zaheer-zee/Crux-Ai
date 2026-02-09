@app.post("/api/chat")
async def chat(request: dict):
    """
    Chat endpoint using Google Gemini API for AI assistance.
    """
    try:
        user_message = request.get("message", "")
        chat_history = request.get("history", [])
        
        if not user_message:
            raise HTTPException(status_code=400, detail="Message is required")
        
        # Use Gemini API for real LLM response
        import google.generativeai as genai
        import os
        
        gemini_api_key = os.getenv("GEMINI_API_KEY")
        if not gemini_api_key:
            return {
                "response": "I'm here to help! I can assist you with verifying claims, checking crisis alerts, or navigating the platform. How can I help you today?"
            }
        
        genai.configure(api_key=gemini_api_key)
        model = genai.GenerativeModel('gemini-1.5-flash')
        
        # Build conversation context
        conversation_parts = []
        system_prompt = """You are a helpful AI assistant for a fact-checking and misinformation detection platform called Truth Weaver. 
        You can help users verify claims, check crisis alerts, navigate the platform, and understand credibility scores. 
        Be concise, helpful, and accurate."""
        
        conversation_parts.append(system_prompt)

        # Add last 3 messages for context
        for msg in chat_history[-3:]:
            role = "user" if msg.get("role") == "user" else "model"
            conversation_parts.append(f"{role}: {msg.get('content', '')}")
        
        conversation_parts.append(f"user: {user_message}")
        full_prompt = "\n".join(conversation_parts) + "\n\nmodel:"
        
        response = model.generate_content(full_prompt)
        ai_response = response.text.strip()
        
        return {
            "response": ai_response
        }
    
    except Exception as e:
        print(f"Error in chat: {e}")
        raise HTTPException(status_code=500, detail=str(e))
