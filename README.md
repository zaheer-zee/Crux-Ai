# Truth Weaver
 
 ## Project info
 
 **Description**: Truth Weaver is an AI-powered fact-checking and misinformation detection platform.
 
 ## How can I edit this code?
 
 There are several ways of editing your application.
 
 **Use your preferred IDE**
 
 If you want to work locally using your own IDE, you can clone this repo and push changes.
 
 The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
 
 Follow these steps:
 
 ```sh
 # Step 1: Clone the repository using the project's Git URL.
 git clone <YOUR_GIT_URL>
 
 # Step 2: Navigate to the project directory.
 cd <YOUR_PROJECT_NAME>
 
 # Step 3: Install the necessary dependencies.
 npm i
 
 # Step 4: Start the development server with auto-reloading and an instant preview.
 npm run dev
 ```
 
 **Edit a file directly in GitHub**
 
 - Navigate to the desired file(s).
 - Click the "Edit" button (pencil icon) at the top right of the file view.
 - Make your changes and commit the changes.
 
 **Use GitHub Codespaces**
 
 - Navigate to the main page of your repository.
 - Click on the "Code" button (green button) near the top right.
 - Select the "Codespaces" tab.
 - Click on "New codespace" to launch a new Codespace environment.
 - Edit files directly within the Codespace and commit and push your changes once you're done.
 
 ## What technologies are used for this project?
 
 This project is built with:
 
 ### Frontend
 - Vite
 - TypeScript
 - React
 - shadcn-ui
 - Tailwind CSS
 
 ### Backend
 - FastAPI (Python)
 - Groq AI (for fact-checking and explanations)
 - DuckDuckGo Search (for evidence gathering)
 - NewsData API (for news scanning)
 
 ## How can I deploy this project?
 
 ### Quick Deploy to Vercel
 
 1. Install Vercel CLI: `npm install -g vercel`
 2. Run: `vercel`
 3. Configure environment variables in Vercel dashboard:
    - `GROQ_API_KEY` (Required)
    - `NEWSDATA_API_KEY` (Optional)
 4. Redeploy: `vercel --prod`
 
 For detailed deployment instructions, troubleshooting, and production setup, see [DEPLOYMENT.md](./DEPLOYMENT.md).
 
 ### Local Development
 
 **Run frontend and backend together:**
 ```bash
 npm install
 npm run dev:all
 ```
 
 **Or run separately:**
 ```bash
 # Frontend
 npm run dev
 
 # Backend (in another terminal)
 npm run backend
 ```
