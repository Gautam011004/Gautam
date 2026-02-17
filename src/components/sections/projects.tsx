import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Link } from "../ui/link";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl sm:text-4xl mb-12 text-center">Projects</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg font-bold">
                                    Solana Indexer
                                </CardTitle>
                                <CardDescription>
                                    Open source hybrid indxer for the Solana blockchain, gRPC yellowstone ingestion for realtime data consumption and JSON RPC for single source of truth.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col pt-11">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge variant="secondary">Rust</Badge>
                                    <Badge variant="secondary">gRPC</Badge>
                                    <Badge variant="secondary">JSON RPC</Badge>
                                    <Badge variant="secondary">PostgreSQL</Badge>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Link href="https://github.com/Gautam011004/Solana-indexer" className="flex-1">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg font-bold">
                                    MPC-Schnorr
                                </CardTitle>
                                <CardDescription>
                                    An open source library for implementing a multi party computation server. 
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col pt-23">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge variant="secondary">Rust</Badge>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Link href="https://github.com/Gautam011004/mpc-schnorr" className="flex-1">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg font-bold">
                                    Collably-draw
                                </CardTitle>
                                <CardDescription>
                                    A collaborative take on excali draw using websockets.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col pt-23">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge variant="secondary">TypeScript</Badge>
                                    <Badge variant="secondary">Next.js</Badge>
                                    <Badge variant="secondary">Tailwind</Badge>
                                    <Badge variant="secondary">PostgreSQL</Badge>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Link href="https://github.com/Gautam011004/Collaborative-Excalidraw" className="flex-1">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}