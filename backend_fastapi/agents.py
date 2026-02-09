import os
import json
from typing import List, Optional
from datetime import datetime
from dotenv import load_dotenv
from duckduckgo_search import DDGS
import google.generativeai as genai
from models import Claim, Evidence, ScoreResponse, CrisisAlert, CrisisResponse
import requests
from bs4 import BeautifulSoup

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
NEWSDATA_API_KEY = os.getenv("NEWSDATA_API_KEY")

class ScanAgent:
    def __init__(self):
        self.api_key = NEWSDATA_API_KEY
        if not self.api_key:
            print("WARNING: NEWSDATA_API_KEY not set. Using mock data for news scanning.")
        
        # Map frontend categories to NewsData API categories
        self.category_mapping = {
            "general-news": "top",
            "politics": "politics",
            "health": "health",
            "crisis": "world",
            "finance": "business",
            "tech-ai": "technology",
            "science": "science",
            "crime": "crime",
            "international": "world",
            "social": "entertainment"
        }

    def scan_by_category(self, category: str) -> List[Claim]:
        """Scan news by category"""
        claims = []
        
        # Map frontend category to NewsData category
        api_category = self.category_mapping.get(category, "top")
        
        if self.api_key:
            try:
                from newsdataapi import NewsDataApiClient
                api = NewsDataApiClient(apikey=self.api_key)
                print(f"Fetching {category} news (API category: {api_category})...")
                
                # Fetch news for specific category
                response = api.news_api(category=api_category, language="en")
                
                if response and 'results' in response:
                    seen_titles = set()
                    for article in response['results']:
                        title = article.get('title', 'No title')
                        if title not in seen_titles:
                            seen_titles.add(title)
                            claims.append(Claim(
                                text=title,
                                source=article.get('source_id', 'newsdata'),
                                status="unverified",
                                evidence=[Evidence(
                                    source=article.get('source_id', 'newsdata'),
                                    content=article.get('description', '') or title,
                                    url=article.get('link', '')
                                )]
                            ))
                    print(f"Successfully fetched {len(claims)} articles for {category}")
                else:
                    print(f"No results from NewsData API for {category}")
            except ImportError as e:
                print(f"ERROR: Failed to import newsdataapi: {e}")
            except Exception as e:
                print(f"ERROR: Failed to fetch {category} news: {e}")
        else:
            print(f"Using mock data for {category} (no NEWSDATA_API_KEY)")
        
        if not claims:
            # Fallback mock data
            claims = self._get_mock_news_by_category(category)
        
        return claims
    
    def _get_mock_news_by_category(self, category: str) -> List[Claim]:
        """Generate mock news for a category"""
        mock_data = {
            "general-news": "Breaking: Major developments in global affairs.",
            "politics": "Election results show surprising turnout.",
            "health": "New health guidelines announced by WHO.",
            "crisis": "Emergency response teams deployed to affected areas.",
            "finance": "Stock markets show mixed signals amid economic uncertainty.",
            "tech-ai": "AI breakthrough announced by leading tech company.",
            "science": "Scientists discover new insights into climate patterns.",
            "crime": "Law enforcement reports decrease in crime rates.",
            "international": "International summit addresses global challenges.",
            "social": "Viral social media trend sparks global conversation."
        }
        
        return [Claim(
            text=mock_data.get(category, "Latest news update."),
            source="mock_data",
            status="unverified"
        )]

    def scan(self, source_url: Optional[str] = None) -> List[Claim]:
        claims = []
        if self.api_key:
            try:
                from newsdataapi import NewsDataApiClient
                api = NewsDataApiClient(apikey=self.api_key)
                print(f"Scanning news with NewsData API...")
                # Fetch latest news about crisis topics
                response = api.news_api(q="crisis OR war OR disaster OR emergency OR earthquake OR attack", language="en", country="us")
                
                if response and 'results' in response:
                    seen_titles = set()
                    for article in response['results']:
                        title = article.get('title', 'No title')
                        if title not in seen_titles:
                            seen_titles.add(title)
                            claims.append(Claim(
                                text=title,
                                source=article.get('source_id', 'newsdata'),
                                status="unverified",
                                evidence=[Evidence(
                                    source=article.get('source_id', 'newsdata'),
                                    content=article.get('description', '') or title,
                                    url=article.get('link', '')
                                )]
                            ))
                    print(f"Successfully scanned {len(claims)} news articles")
                else:
                    print("No results from NewsData API")
            except ImportError as e:
                print(f"ERROR: Failed to import newsdataapi: {e}")
            except Exception as e:
                print(f"ERROR: Failed to scan news: {e}")
        else:
            print("Using mock data (no NEWSDATA_API_KEY)")
        
        if not claims:
            # Fallback mock data if API fails or returns nothing
            print("Returning mock crisis data")
            claims.append(Claim(
                text="Breaking: Major earthquake reported in Japan.",
                source="social_media_mock",
                status="unverified"
            ))
        return claims

class VerifyAgent:
    def verify(self, claim: Claim, link: Optional[str] = None, image_content: Optional[bytes] = None) -> Claim:
        print(f"Verifying claim: {claim.text}")
        
        # Process Link
        if link:
            try:
                import requests
                from bs4 import BeautifulSoup
                print(f"Fetching content from link: {link}")
                response = requests.get(link, timeout=10)
                response.raise_for_status()
                soup = BeautifulSoup(response.content, 'html.parser')
                title = soup.title.string if soup.title else link
                text_content = soup.get_text()[:1000] # Limit content
                
                claim.evidence.append(Evidence(
                    source=f"User Link: {title}",
                    content=f"Extracted content: {text_content}...",
                    url=link
                ))
                
                # If claim text is empty, use the link title/content
                if not claim.text:
                    claim.text = f"Check content from {link}"
                print(f"Successfully extracted content from link")
                    
            except requests.exceptions.RequestException as e:
                print(f"ERROR: Failed to fetch link {link}: {e}")
                claim.evidence.append(Evidence(
                    source="User Link",
                    content=f"Failed to fetch content from {link}: {str(e)}",
                    url=link
                ))
            except Exception as e:
                print(f"ERROR: Unexpected error processing link: {e}")
                claim.evidence.append(Evidence(
                    source="User Link",
                    content=f"Error processing link: {str(e)}",
                    url=link
                ))

        # Process Image (Placeholder for now)
        if image_content:
            print(f"Received image upload ({len(image_content)} bytes)")
            claim.evidence.append(Evidence(
                source="User Image",
                content="Image received. (Vision analysis not yet implemented)",
                url="Uploaded Image"
            ))
            if not claim.text:
                claim.text = "Verify uploaded image content"

        # Perform Search Verification
        if claim.text:
            try:
                # Improve search query to get fact-checking results
                search_queries = [
                    f"{claim.text} fact check",
                    f"{claim.text} snopes",
                    f"{claim.text} verified"
                ]
                
                print(f"Searching for fact-checking evidence: {claim.text}")
                with DDGS() as ddgs:
                    # Try multiple search strategies
                    all_results = []
                    for query in search_queries[:2]:  # Use first 2 queries
                        try:
                            results = list(ddgs.text(query, max_results=2))
                            all_results.extend(results)
                            if len(all_results) >= 3:
                                break
                        except:
                            continue
                    
                    # Remove duplicates and limit to 3 results
                    seen_urls = set()
                    unique_results = []
                    for r in all_results:
                        url = r.get('href', '')
                        if url and url not in seen_urls:
                            seen_urls.add(url)
                            unique_results.append(r)
                            if len(unique_results) >= 3:
                                break
                    
                    for r in unique_results:
                        claim.evidence.append(Evidence(
                            source=r.get('title', 'Unknown'),
                            content=r.get('body', ''),
                            url=r.get('href', '')
                        ))
                    print(f"Found {len(unique_results)} fact-checking results")
            except Exception as e:
                print(f"ERROR: DuckDuckGo search failed: {e}")
                claim.evidence.append(Evidence(
                    source="Search Error",
                    content=f"Failed to perform web search: {str(e)}",
                    url=""
                ))
        
        return claim

class ScoreAgent:
    def __init__(self):
        if GEMINI_API_KEY:
            genai.configure(api_key=GEMINI_API_KEY)
            self.model = genai.GenerativeModel('gemini-1.5-flash')
        else:
            self.model = None
        if not self.model:
            print("WARNING: GEMINI_API_KEY not set. Scoring will return UNVERIFIED.")

    def score(self, claim: Claim) -> ScoreResponse:
        if not self.model:
            # Fallback if no API key
            print("ERROR: Cannot score claim - no GEMINI_API_KEY configured")
            return ScoreResponse(
                final_score=0,
                source_reliability=0,
                evidence_strength=0,
                consistency=0,
                verdict="UNVERIFIED"
            )

        evidence_text = "\n".join([f"- {e.content} ({e.url})" for e in claim.evidence])
        prompt = f"""
        You are an expert fact-checker with advanced analytical reasoning. Your goal is to provide ACCURATE credibility assessment.
        
        CRITICAL: Read the evidence CAREFULLY before scoring. Do NOT rush to conclusions.

        STEP 1: UNDERSTAND THE CLAIM
        Claim to verify: "{claim.text}"
        
        Ask yourself:
        - What is this claim actually saying?
        - What would "true" look like? What would "false" look like?
        - What type of evidence would prove or disprove this?
        
        STEP 2: READ ALL EVIDENCE THOROUGHLY
        Evidence provided:
        {evidence_text}
        
        For EACH piece of evidence, ask:
        - Is this about the SAME topic as the claim?
        - Does this SUPPORT the claim, CONTRADICT it, or is it IRRELEVANT?
        - How RELIABLE is this source?
        
        STEP 3: DEEP ANALYSIS
        Answer these questions carefully:
        
        a) RELEVANCE CHECK:
           - Is the evidence actually about "{claim.text}"?
           - Or is it about something completely different?
           - If irrelevant → mark UNVERIFIED
        
        b) CONTENT ANALYSIS:
           - What does each source actually SAY?
           - Do they confirm or deny the claim?
           - Are there scientific facts, studies, or expert opinions?
        
        c) SOURCE RELIABILITY:
           - Wikipedia, .edu, .gov, scientific journals, fact-checkers (Snopes, PolitiFact) = HIGH reliability (80-100)
           - News outlets (BBC, Reuters, AP) = GOOD reliability (70-85)
           - Blogs, unknown sites, social media = LOW reliability (0-40)
        
        d) EVIDENCE CONSISTENCY:
           - Do all sources agree?
           - Are there contradictions?
           - How strong is the consensus?
        
        e) SCIENTIFIC BASIS:
           - Is there scientific consensus?
           - Are there studies or research cited?
           - Is this a well-established fact or controversial?
        
        STEP 4: CROSS-VERIFY YOUR VERDICT
        Before deciding, check:
        - If you think it's FALSE: Did you find evidence that CONTRADICTS the claim?
        - If you think it's VERIFIED: Did you find evidence that CONFIRMS the claim?
        - If you think it's MIXED: Did you find BOTH supporting AND contradicting evidence?
        - If you think it's UNVERIFIED: Is the evidence truly insufficient or irrelevant?
        
        STEP 5: ASSIGN ACCURATE SCORES
        
        Based on your analysis, use this EXACT logic:
        
        1. final_score (Overall credibility):
           - VERIFIED (evidence confirms claim): 75-95
             Examples: 85 for strong confirmation, 92 for very strong
           - FALSE (evidence contradicts claim): 10-25
             Examples: 15 for clearly debunked, 22 for partially debunked
           - MIXED (contradictory evidence): 40-60
             Examples: 45 if leaning false, 55 if leaning true
           - UNVERIFIED (no relevant evidence): 45-55
             Examples: 50 for neutral lack of evidence
        
        2. source_reliability (0-100):
           - Count how many sources are reliable
           - Wikipedia, fact-checkers, .edu = 85-95
           - News sites = 70-80
           - Blogs, unknown = 20-40
        
        3. evidence_strength (0-100):
           - Is evidence conclusive? 80-95
           - Is evidence moderate? 50-70
           - Is evidence weak/vague? 20-40
        
        4. consistency (0-100):
           - All sources agree? 90-100
           - Most agree? 70-85
           - Mixed opinions? 45-55
           - Contradictory? 20-40
        
        5. verdict (VERIFIED/FALSE/MIXED/UNVERIFIED):
           Choose based on your analysis above
        
        VERIFICATION RULES:
        ✓ If verdict = FALSE, final_score MUST be 10-25 (NOT 0)
        ✓ If verdict = VERIFIED, final_score MUST be 75-95 (NOT 100)
        ✓ Scores MUST align with verdict logic
        ✓ Read evidence content, don't just guess
        
        EXAMPLES OF CORRECT ANALYSIS:
        
        1. Claim: "Earth is flat"
           Evidence: "Wikipedia: Earth is an oblate spheroid. Scientific consensus confirms spherical shape."
           Analysis: Evidence clearly contradicts claim. Sources are reliable (Wikipedia, science). Strong evidence.
           → {{"final_score": 18, "source_reliability": 92, "evidence_strength": 90, "consistency": 95, "verdict": "FALSE"}}
        
        2. Claim: "Vaccines cause autism"
           Evidence: "CDC: No link found. Multiple peer-reviewed studies show no connection."
           Analysis: Evidence contradicts claim. Highly reliable sources. Scientific consensus.
           → {{"final_score": 12, "source_reliability": 95, "evidence_strength": 95, "consistency": 100, "verdict": "FALSE"}}
        
        3. Claim: "Coffee is healthy"
           Evidence: "Study A: Coffee reduces diabetes risk. Study B: High consumption may increase anxiety."
           Analysis: Mixed evidence. Some benefits, some risks. Both from studies.
           → {{"final_score": 55, "source_reliability": 75, "evidence_strength": 70, "consistency": 45, "verdict": "MIXED"}}
        
        Return ONLY a JSON object (no explanation):
        {{"final_score": <number>, "source_reliability": <number>, "evidence_strength": <number>, "consistency": <number>, "verdict": "<string>"}}
        """
        
        try:
            print(f"Scoring claim with Groq AI: {claim.text[:50]}...")
            
            # Check if we have any meaningful evidence
            if not claim.evidence or len(claim.evidence) == 0:
                print("WARNING: No evidence found for claim")
                return ScoreResponse(
                    final_score=50,
                    source_reliability=0,
                    evidence_strength=0,
                    consistency=0,
                    verdict="UNVERIFIED"
                )
            
            # Check if evidence has content
            has_content = any(e.content and len(e.content.strip()) > 10 for e in claim.evidence)
            if not has_content:
                print("WARNING: Evidence found but no meaningful content")
                return ScoreResponse(
                    final_score=50,
                    source_reliability=30,
                    evidence_strength=20,
                    consistency=50,
                    verdict="UNVERIFIED"
                )
            
            
            response = self.model.generate_content(prompt)
            result_text = response.text.strip()
            
            # Remove markdown code blocks if present
            if result_text.startswith("```json"):
                result_text = result_text[7:]
            if result_text.startswith("```"):
                result_text = result_text[3:]
            if result_text.endswith("```"):
                result_text = result_text[:-3]
            result_text = result_text.strip()
            
            result = json.loads(result_text)
            print(f"Scoring complete: {result.get('verdict', 'UNKNOWN')}, Score: {result.get('final_score', 0)}")
            return ScoreResponse(**result)
        except json.JSONDecodeError as e:
            print(f"ERROR: Failed to parse Groq response as JSON: {e}")
            return ScoreResponse(
                final_score=0,
                source_reliability=0,
                evidence_strength=0,
                consistency=0,
                verdict="UNVERIFIED"
            )
        except Exception as e:
            print(f"ERROR: Groq API call failed: {e}")
            return ScoreResponse(
                final_score=0,
                source_reliability=0,
                evidence_strength=0,
                consistency=0,
                verdict="UNVERIFIED"
            )

class ExplainAgent:
    def __init__(self):
        if GEMINI_API_KEY:
            genai.configure(api_key=GEMINI_API_KEY)
            self.model = genai.GenerativeModel('gemini-1.5-flash')
        else:
            self.model = None
        if not self.model:
            print("WARNING: GEMINI_API_KEY not set. Explanations will be generic.")

    def explain(self, result: dict) -> str:
        if not self.model:
            # Fallback explanation if no API key
            return "We analyzed the claim and available evidence to provide a credibility assessment."

        try:
            prompt = f"""
            You are an expert fact-checker. Based on the following verification result, provide a clear, 
            concise explanation (2-3 sentences) for the general public about why this claim received this score.
            
            Claim Verified: {result.get('claim', 'N/A')}
            Verdict: {result.get('verdict', 'UNVERIFIED')}
            Credibility Score: {result.get('score', 0)}/100
            
            Explain in simple language why the claim received this verdict and score.
            """
            
            response = self.model.generate_content(prompt)
            print(f"Explanation generated successfully")
            return response.text.strip()
        except Exception as e:
            print(f"ERROR: Failed to generate explanation: {e}")
            return f"Error generating explanation: {str(e)}"

class CrisisAgent:
    def detect_crisis(self, claims: List[Claim]) -> CrisisResponse:
        alerts = []
        keywords = [
            "earthquake", "pandemic", "violence", "tsunami", "terror", "flood", "war", "attack", "assassinated", 
            "airstrike", "conflict", "dead", "killed", "crisis", "warning", "strike", "military", "navy", 
            "russia", "israel", "lebanon", "gaza", "ukraine", "iran", "missile", "bomb", "blast", "explosion", 
            "fire", "wildfire", "storm", "hurricane", "tornado", "typhoon", "cyclone", "weather", "heat", 
            "emergency", "rescue", "police", "arrest", "shoot", "gun", "crime", "murder", "crash", "accident", 
            "disaster", "danger", "threat", "alert", "breaking"
        ]
        
        for claim in claims:
            detected_keywords = [k for k in keywords if k in claim.text.lower()]
            if detected_keywords:
                alerts.append(CrisisAlert(
                    id=str(hash(claim.text)),
                    title="Potential Crisis Detected",
                    severity="HIGH", # Simplified logic
                    region="Unknown", # Would need NER for this
                    verified=claim.status == "verified",
                    keywords=detected_keywords,
                    description=claim.text
                ))
        
        return CrisisResponse(
            crisis_detected=len(alerts) > 0,
            alerts=alerts,
            recommended_actions=["Monitor situation", "Verify sources"] if alerts else []
        )
