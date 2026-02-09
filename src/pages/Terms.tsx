import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="prose dark:prose-invert max-w-none space-y-6">
                    <p className="text-muted-foreground">Last updated: November 2025</p>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using CruxAI, you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                        <p>
                            CruxAI provides AI-powered fact-checking and information verification services.
                            While we strive for accuracy, our services are provided "as is" and we cannot guarantee
                            100% accuracy of all verifications.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
                        <p>
                            You agree not to use the service for any unlawful purpose or to solicit others to perform
                            or participate in any unlawful acts.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
