import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Guides = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">Guides & Tutorials</h1>
                <div className="space-y-4">
                    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <h3 className="font-semibold">How to verify a news article</h3>
                        <p className="text-sm text-muted-foreground">Learn the basics of using our verification engine.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <h3 className="font-semibold">Understanding Credibility Scores</h3>
                        <p className="text-sm text-muted-foreground">What do the numbers mean? A deep dive.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <h3 className="font-semibold">Spotting Deepfakes</h3>
                        <p className="text-sm text-muted-foreground">Tips for identifying manipulated media manually.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Guides;
