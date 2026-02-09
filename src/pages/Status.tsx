import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const Status = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-8">System Status</h1>

                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-green-500/10 border-green-500/20">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-500" />
                            <span className="font-semibold">All Systems Operational</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Updated 1 min ago</span>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 border rounded-lg">
                            <span>API</span>
                            <span className="text-green-500 font-medium">Operational</span>
                        </div>
                        <div className="flex justify-between items-center p-4 border rounded-lg">
                            <span>Web Interface</span>
                            <span className="text-green-500 font-medium">Operational</span>
                        </div>
                        <div className="flex justify-between items-center p-4 border rounded-lg">
                            <span>Database</span>
                            <span className="text-green-500 font-medium">Operational</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Status;
