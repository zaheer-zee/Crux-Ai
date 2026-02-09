import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Transparency = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">Transparency Report</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    We believe in being open about how we operate and the decisions we make.
                </p>
                <div className="space-y-6">
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">AI Model Transparency</h3>
                        <p className="text-muted-foreground">
                            We use Google's Gemini models for our core analysis. We regularly audit our prompts
                            and system instructions to minimize bias.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Data Sources</h3>
                        <p className="text-muted-foreground">
                            Our fact-checking relies on a curated list of high-credibility sources.
                            We do not manually intervene in specific verification results unless a system error is detected.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Transparency;
