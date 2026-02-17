import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "../ui/link";

export function AboutMeSection() {
    return (
        <section id="about" className="py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl mb-12 text-center">About Me</h2>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-base sm:text-lg">
                            I’m a developer who enjoys building systems from the ground up and understanding how things work beneath the surface. My interests span backend architecture, Rust systems programming, full-stack web development, and emerging areas like Web3 and AI-powered applications
                            </p>
                            <p className="text-base sm:text-lg">
                            I like working close to the metal: exploring memory models, concurrency, and efficient data handling. At the same time, I enjoy creating user-facing tools with modern web stacks, connecting React frontends to Node or Rust backends, and designing architectures that can scale. Many of my projects focus on practical problem-solving — scraping and processing data, document automation, workflow routing, and building tools.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://github.com/Gautam011004">
                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                </Link>
                                <Link href="https://www.linkedin.com/in/divya-gautam-a6a3612ba/">
                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                </Link>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <span className="break-all">divyagautam326@gmail.com</span>
                                        </div>
                                        <div className="items-center gap-3 hidden">
                                            <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <span>+91 9172643400</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <span>Mumbai - India</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}