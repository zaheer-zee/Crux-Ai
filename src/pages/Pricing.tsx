import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container max-w-6xl mx-auto py-12 px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-muted-foreground">Choose the plan that's right for you.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Free Plan */}
                    <div className="border rounded-2xl p-8 bg-card shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-2xl font-bold mb-2">Free</h3>
                        <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> 5 verifications/day</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Basic credibility scores</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Community support</li>
                        </ul>
                        <Button className="w-full" variant="outline">Get Started</Button>
                    </div>

                    {/* Pro Plan */}
                    <div className="border-2 border-primary rounded-2xl p-8 bg-card shadow-lg relative">
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                        <h3 className="text-2xl font-bold mb-2">Pro</h3>
                        <div className="text-4xl font-bold mb-6">$12<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Unlimited verifications</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Advanced media forensics</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Priority support</li>
                        </ul>
                        <Button className="w-full">Subscribe Now</Button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="border rounded-2xl p-8 bg-card shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                        <div className="text-4xl font-bold mb-6">Custom</div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> API Access</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Custom integrations</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Dedicated account manager</li>
                        </ul>
                        <Button className="w-full" variant="outline">Contact Sales</Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Pricing;
