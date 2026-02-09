import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Search, AlertTriangle, Brain } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: Shield,
            title: "Credibility Scoring",
            description: "Get an instant trust score for any article or claim, backed by AI analysis of sources and content patterns."
        },
        {
            icon: Search,
            title: "Fact Verification",
            description: "Cross-reference claims against a vast database of verified facts and reputable news sources in real-time."
        },
        {
            icon: AlertTriangle,
            title: "Crisis Alerts",
            description: "Stay safe with real-time alerts for emerging crises, natural disasters, and misinformation campaigns."
        },
        {
            icon: Brain,
            title: "Media Forensics",
            description: "Detect manipulated images and deepfakes using advanced computer vision and forensic analysis algorithms."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-6xl mx-auto py-12 px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to verify information and stay informed.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
                            <feature.icon className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Features;
