import { Mail, Phone } from "lucide-react";
import { Link } from "./ui/link";

export function Footer() {

    return (
        <footer className="border-t py-12 sm:py-16 bg-background" id="contact">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-xl sm:text-2xl mb-4 font-bold">Let's Work Together</h3>
                    <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                        I'm always open to discussing new opportunities and interesting projects.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <Link
                            href="mailto:divyagautam326@gmail.com"
                            className="w-full sm:w-auto h-15 px-10 text-base"
                        >
                            Email Me
                        </Link>
                        <Link href="tel:+91 9172643400" className="w-full sm:w-auto hidden">
                            <Phone className="mr-2 h-4 w-4" />
                            Call Me
                        </Link>
                        <Link
                            href="https://cal.com/divya-gautam-42gqjx/30min"
                            className="w-full sm:w-auto h-15 px-6 text-base"
                        >
                            Schedule a meeting
                        </Link> 
                    </div>
                </div>
            </div>
        </footer>
    )
}