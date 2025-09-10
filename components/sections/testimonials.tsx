"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, BrainCircuit, Clock, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Professional testimonials reflecting AI engineering work
const testimonials = [
    {
        id: 1,
        name: "Dr. Ahmed Al-Rashid",
        role: "Research Director",
        company: "Fujairah Research Center",
        country: "🇦🇪 UAE",
        avatar: "/avatars/ahmed.jpg",
        rating: 5,
        quote: "Ibtissam delivered an exceptional multi-agent AI system that transformed our honey quality verification process. Her expertise in LLMs and RAG pipelines exceeded our expectations.",
        project: "Multi-Agent Honey Quality System",
        highlight: "Production AI System",
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
    },
    {
        id: 2,
        name: "Marie Dubois",
        role: "CTO",
        company: "Devtospace",
        country: "🇫🇷 Paris, France",
        avatar: "/avatars/marie.jpg",
        rating: 5,
        quote: "The KYC automation system Ibtissam built using AWS AI services significantly improved our client onboarding process. Her computer vision implementation was flawless.",
        project: "AI-Powered KYC System",
        highlight: "Cloud AI Solutions",
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
    },
    {
        id: 3,
        name: "Hassan Bennani",
        role: "Innovation Manager",
        company: "3D Smart Factory",
        country: "🇲🇦 Mohammedia, Morocco",
        avatar: "/avatars/hassan.jpg",
        rating: 5,
        quote: "Ibtissam's RAG-powered career platform showcased her deep understanding of AI technologies. Her integration of LangChain and vector databases was impressive.",
        project: "RAG Career Intelligence Platform",
        highlight: "AI Innovation",
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
    },
];

// Updated stats to reflect AI engineering achievements
const stats = [
    { icon: BrainCircuit, value: "10+", label: "AI Models Deployed" },
    { icon: Award, value: "3", label: "Production Systems" },
    { icon: Users, value: "5+", label: "International Clients" },
    { icon: Clock, value: "100%", label: "Project Success Rate" },
];

export function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash === '#testimonials' && sectionRef.current) {
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    }, []);

    return (
        <section id="testimonials" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden scroll-mt-24">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-4">
                        <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20">
                            Client Success Stories
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold">
                            What Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Leaders Say</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Feedback from organizations that have experienced the impact of my AI engineering solutions.
                        </p>
                    </div>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: [0.215, 0.61, 0.355, 1],
                            }}
                            viewport={{ once: true }}
                            className="group h-full"
                        >
                            <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 ${testimonial.borderColor}`}>
                                <CardHeader className="flex flex-row items-start gap-4 p-6">
                                    <Avatar className="w-14 h-14 border-2 border-primary/50">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20">
                                            {testimonial.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                            <div className="flex items-center gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-muted-foreground">{testimonial.role}</p>
                                        <p className="text-sm text-primary">{testimonial.company}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{testimonial.country}</p>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
                                    <div className="relative">
                                        <Quote className={`absolute -top-2 -left-2 w-8 h-8 ${testimonial.color} opacity-20`} />
                                        <p className="text-base italic leading-relaxed z-10">
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <Badge variant="secondary" className="font-mono text-xs uppercase tracking-wider">
                                            {testimonial.project}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    className="bg-card/50 border rounded-xl p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center gap-2">
                                <stat.icon className="w-10 h-10 text-primary" />
                                <p className="text-3xl font-bold">{stat.value}</p>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
            </div>
        </section>
    );
}