import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Community = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">Community</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Join the conversation with other truth seekers.
                </p>
                <div className="p-12 text-center border rounded-lg bg-muted/20">
                    <h3 className="text-2xl font-semibold mb-4">Community Forum Coming Soon</h3>
                    <p className="text-muted-foreground">
                        We are building a space for our users to connect and share insights.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Community;
