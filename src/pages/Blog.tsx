import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Blog = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">CruxAI Blog</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Insights on misinformation, AI, and digital trust.
                </p>
                <div className="space-y-8">
                    <article className="border-b pb-8">
                        <h2 className="text-2xl font-semibold mb-2 hover:text-primary cursor-pointer">The Future of Truth in the Age of AI</h2>
                        <p className="text-muted-foreground mb-4">November 28, 2025</p>
                        <p>Exploring how artificial intelligence is reshaping our understanding of truth and verification...</p>
                    </article>
                    <article className="border-b pb-8">
                        <h2 className="text-2xl font-semibold mb-2 hover:text-primary cursor-pointer">Combating Deepfakes: A Technical Deep Dive</h2>
                        <p className="text-muted-foreground mb-4">November 15, 2025</p>
                        <p>Understanding the technology behind our media forensics engine...</p>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
