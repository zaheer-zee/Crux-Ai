import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Documentation = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">Documentation</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Learn how to use CruxAI effectively.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                    <div
                        className="p-6 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                        onClick={() => navigate("/docs/getting-started")}
                    >
                        <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
                        <p className="text-muted-foreground">Quick start guide for new users.</p>
                    </div>
                    <div
                        className="p-6 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                        onClick={() => navigate("/docs/verification-guide")}
                    >
                        <h3 className="text-xl font-semibold mb-2">Verification Guide</h3>
                        <p className="text-muted-foreground">How to interpret credibility scores.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Documentation;
