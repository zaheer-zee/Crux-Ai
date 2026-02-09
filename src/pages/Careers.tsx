import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Careers = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Help us build the future of information integrity.
                </p>
                <div className="p-12 text-center border rounded-lg bg-muted/20">
                    <h3 className="text-2xl font-semibold mb-4">No Open Positions</h3>
                    <p className="text-muted-foreground">
                        We currently don't have any open roles, but we're always looking for talented individuals.
                        Check back soon!
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Careers;
