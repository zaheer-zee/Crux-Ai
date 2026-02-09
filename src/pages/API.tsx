import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const API = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">CruxAI API</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Integrate our powerful verification engine directly into your applications.
                </p>
                <div className="p-6 border rounded-lg bg-muted/50">
                    <h3 className="text-xl font-semibold mb-2">Documentation Coming Soon</h3>
                    <p>We are currently finalizing our public API documentation. Please check back later or contact us for early access.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default API;
