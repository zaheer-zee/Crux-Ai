import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const HelpCenter = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">Help Center</h1>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="p-6 border rounded-lg text-center hover:bg-muted/50 transition-colors">
                        <h3 className="font-semibold mb-2">Account & Billing</h3>
                        <p className="text-sm text-muted-foreground">Manage your subscription and profile.</p>
                    </div>
                    <div className="p-6 border rounded-lg text-center hover:bg-muted/50 transition-colors">
                        <h3 className="font-semibold mb-2">Using CruxAI</h3>
                        <p className="text-sm text-muted-foreground">Guides on verification tools.</p>
                    </div>
                    <div className="p-6 border rounded-lg text-center hover:bg-muted/50 transition-colors">
                        <h3 className="font-semibold mb-2">Troubleshooting</h3>
                        <p className="text-sm text-muted-foreground">Common issues and fixes.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HelpCenter;
