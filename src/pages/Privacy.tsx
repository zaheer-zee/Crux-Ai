import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose dark:prose-invert max-w-none space-y-6">
                    <p className="text-muted-foreground">Last updated: November 2025</p>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                        <p>
                            We collect information you provide directly to us, such as when you create an account,
                            submit content for verification, or contact us for support. This may include your email address,
                            name, and the text or media you upload.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Process your verification requests.</li>
                            <li>Send you technical notices and support messages.</li>
                            <li>Detect and prevent fraud and abuse.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
                        <p>
                            We take reasonable measures to help protect information about you from loss, theft,
                            misuse and unauthorized access, disclosure, alteration and destruction.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
