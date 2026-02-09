import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Check, HelpCircle, X } from "lucide-react";

const VerificationGuide = () => {
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

                <h1 className="text-4xl font-bold mb-6">Verification Guide</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Learn how CruxAI analyzes information and interprets credibility scores.
                </p>

                <div className="space-y-12">
                    {/* Scoring System */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-6">The Credibility Score</h2>
                        <p className="mb-6">
                            Our proprietary scoring algorithm assigns a value between 0 and 100 to every piece of content.
                            Here is what those scores mean:
                        </p>

                        <div className="grid gap-4">
                            <div className="flex items-start gap-4 p-4 border rounded-lg bg-green-500/5 border-green-500/20">
                                <div className="p-2 bg-green-500/10 rounded-full">
                                    <Check className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">High Credibility (80-100)</h3>
                                    <p className="text-sm text-muted-foreground">
                                        The information is verified by multiple trusted sources. The context is accurate, and no manipulation is detected.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 border rounded-lg bg-yellow-500/5 border-yellow-500/20">
                                <div className="p-2 bg-yellow-500/10 rounded-full">
                                    <HelpCircle className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Unverified / Mixed (40-79)</h3>
                                    <p className="text-sm text-muted-foreground">
                                        The claim may have some truth but lacks sufficient evidence, or there are conflicting reports from trusted sources. Proceed with caution.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 border rounded-lg bg-red-500/5 border-red-500/20">
                                <div className="p-2 bg-red-500/10 rounded-full">
                                    <X className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Low Credibility (0-39)</h3>
                                    <p className="text-sm text-muted-foreground">
                                        The information is likely false, misleading, or debunked. It may contradict established facts or come from known unreliable sources.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Methodology */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-6">Our Methodology</h2>
                        <div className="prose dark:prose-invert max-w-none">
                            <p>
                                CruxAI uses a multi-step process to verify information:
                            </p>
                            <ol>
                                <li>
                                    <strong>Claim Extraction:</strong> We use Natural Language Processing (NLP) to identify the core claims within a text or article.
                                </li>
                                <li>
                                    <strong>Cross-Referencing:</strong> These claims are queried against our database of verified facts and live internet searches from reputable news organizations.
                                </li>
                                <li>
                                    <strong>Source Analysis:</strong> We evaluate the credibility of the sources reporting the information, checking for history of bias or misinformation.
                                </li>
                                <li>
                                    <strong>Media Forensics:</strong> If images are present, we analyze them for signs of digital manipulation, such as deepfake artifacts or metadata inconsistencies.
                                </li>
                            </ol>
                        </div>
                    </section>

                    {/* Limitations */}
                    <section className="bg-muted/30 p-6 rounded-xl border">
                        <div className="flex items-center gap-2 mb-4 text-amber-500">
                            <AlertTriangle className="w-5 h-5" />
                            <h3 className="font-semibold text-lg text-foreground">Limitations</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            While our AI is powerful, it is not infallible. Breaking news may not yet be verified by enough sources to generate a high score.
                            Always use your own judgment and consult multiple sources for critical information.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default VerificationGuide;
