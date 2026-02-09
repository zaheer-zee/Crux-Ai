import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-2xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Have questions? We'd love to hear from you.
                </p>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="Your email" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Textarea id="message" placeholder="How can we help?" className="min-h-[150px]" />
                    </div>
                    <Button className="w-full">Send Message</Button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
