import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, UserPlus, Search, Shield } from "lucide-react";

const GettingStarted = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <div className="mb-8">
                    <Button variant="ghost" onClick={() => navigate("/docs")} className="pl-0 hover:pl-2 transition-all">
                        ← Back to Documentation
                    </Button>
                </div>

                <h1 className="text-4xl font-bold mb-6">Getting Started with CruxAI</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Welcome to CruxAI! This guide will help you set up your account and perform your first verification in minutes.
                </p>

                <div className="space-y-12">
                    {/* Step 1 */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-lg">1</div>
                            <h2 className="text-2xl font-semibold">Create Your Account</h2>
                        </div>
                        <div className="pl-14 space-y-4">
                            <p>
                                To access all features of CruxAI, you'll need to create an account. It's free and takes less than a minute.
                            </p>
                            <div className="bg-muted/30 p-6 rounded-lg border">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <UserPlus className="w-5 h-5 text-primary" />
                                        <span>Click the <strong>Sign Up</strong> button in the top right corner.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Enter your email and choose a secure password.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Verify your email address via the link sent to your inbox.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Step 2 */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-lg">2</div>
                            <h2 className="text-2xl font-semibold">Verify a Claim</h2>
                        </div>
                        <div className="pl-14 space-y-4">
                            <p>
                                Once logged in, navigate to the <strong>Credibility</strong> page. This is your central hub for fact-checking.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-semibold flex items-center gap-2 mb-2">
                                        <Search className="w-4 h-4" /> Text Verification
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Paste any text, headline, or rumor directly into the input box. Our AI will analyze it against trusted sources.
                                    </p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-semibold flex items-center gap-2 mb-2">
                                        <Shield className="w-4 h-4" /> URL Analysis
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Paste a link to a news article or blog post. We'll scrape the content and verify its claims.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Step 3 */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-lg">3</div>
                            <h2 className="text-2xl font-semibold">Understand the Results</h2>
                        </div>
                        <div className="pl-14 space-y-4">
                            <p>
                                CruxAI provides a detailed breakdown of its findings, not just a simple True/False label.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                <li><strong>Credibility Score:</strong> A 0-100 rating indicating the reliability of the information.</li>
                                <li><strong>Sources:</strong> A list of verified sources that confirm or debunk the claim.</li>
                                <li><strong>Reasoning:</strong> A clear, AI-generated explanation of why the score was given.</li>
                            </ul>
                        </div>
                    </section>

                    <div className="pt-8">
                        <Button size="lg" onClick={() => navigate("/credibility")} className="gap-2">
                            Try it now <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GettingStarted;
