import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">About CruxAI</h1>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg text-muted-foreground mb-6">
                        CruxAI is dedicated to helping people find the truth in a noisy world.
                        We leverage advanced artificial intelligence to verify facts, detect misinformation,
                        and provide clarity when it matters most.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
                    <p>
                        In an era of information overload and deepfakes, trust is harder to find than ever.
                        Our mission is to restore faith in information by providing transparent,
                        AI-powered verification tools that are accessible to everyone.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
                    <p>
                        We use a multi-agent AI system to cross-reference claims against trusted sources,
                        analyze media for manipulation, and provide detailed credibility scores.
                        Our system is designed to be transparent, explaining exactly why a piece of content
                        is flagged as true, false, or unverified.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
