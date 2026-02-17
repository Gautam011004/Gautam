import { Calendar} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function EducationSection() {
    return (
        <section id="education" className="py-16 sm:py-20 lg:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl mb-12 text-center">Education</h2>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg sm:text-xl">Electronics and computer science</CardTitle>
                                    <CardDescription className="text-base">Kalinga institute of industrial technology, Bhubaneshwar</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                        <Calendar className="h-4 w-4" />
                                        <span>2022 - 2026</span>
                                    </div>
                                </CardContent>
                            </Card>
                    </div>
                </div>
            </section>
    )
}