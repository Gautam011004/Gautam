import { Mail } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function HeroSection() {
    function scrollToSection(sectionId: string) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className="py-16 sm:py-20 lg:py-24 text-center bg-linear-to-br from-background to-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">Backend Developer</h1>
                    <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Crafting Fast and Scalable products
                    </p>
                </div>
            </div>
        </section>
    )
}