import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Features from "./pages/Features";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Pricing from "./pages/Pricing";
import API from "./pages/API";
import Documentation from "./pages/Documentation";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import Community from "./pages/Community";
import Guides from "./pages/Guides";
import Status from "./pages/Status";
import CookiePolicy from "./pages/CookiePolicy";
import Transparency from "./pages/Transparency";
import GettingStarted from "./pages/docs/GettingStarted";
import VerificationGuide from "./pages/docs/VerificationGuide";
import AgentMonitor from "./pages/AgentMonitor";
import CredibilityScoring from "./pages/CredibilityScoring";
import CrisisAlerts from "./pages/CrisisAlerts";
import MediaForensics from "./pages/MediaForensics";
import CategoryNews from "./pages/CategoryNews";
import { ChatBot } from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/api-docs" element={<API />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/docs/getting-started" element={<GettingStarted />} />
            <Route path="/docs/verification-guide" element={<VerificationGuide />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/community" element={<Community />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/status" element={<Status />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/transparency" element={<Transparency />} />

            {/* App Routes - Currently public, can be protected later */}
            <Route path="/agent-monitor" element={<AgentMonitor />} />
            <Route path="/credibility" element={<CredibilityScoring />} />
            <Route path="/crisis-alerts" element={<CrisisAlerts />} />
            <Route path="/media-forensics" element={<MediaForensics />} />
            <Route path="/category/:category" element={<CategoryNews />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBot />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
// Deployment trigger - Wed Nov 26 01:21:40 IST 2025
