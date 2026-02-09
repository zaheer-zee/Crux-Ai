import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CookiePolicy = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        CruxAI uses cookies to improve your experience. This policy explains what cookies are,
                        how we use them, and your choices regarding cookies.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-2">What are cookies?</h3>
                    <p>
                        Cookies are small text files that are stored on your device when you visit a website.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-2">How we use cookies</h3>
                    <p>
                        We use cookies to remember your preferences, analyze our traffic, and personalize content.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CookiePolicy;
