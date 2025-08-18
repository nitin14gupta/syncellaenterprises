'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollAnimation from '../animations/ScrollAnimation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function TechnologySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const techItemsRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // Technologies used in your products
    const technologies = [
        { name: "IoT Sensors", icon: "🔌" },
        { name: "Machine Learning", icon: "🧠" },
        { name: "Cloud Computing", icon: "☁️" },
        { name: "Real-time Analytics", icon: "📊" },
        { name: "Blockchain", icon: "🔗" },
        { name: "Edge Computing", icon: "💻" },
        { name: "Computer Vision", icon: "👁️" },
        { name: "Natural Language Processing", icon: "🗣️" },
    ];

    useEffect(() => {
        if (!techItemsRef.current) return;

        const items = techItemsRef.current.querySelectorAll('.tech-item');

        gsap.fromTo(items,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: techItemsRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            id="technology"
            className="py-24 bg-gradient-to-b from-black to-blue-950 overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <ScrollAnimation animation="fadeIn">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Technology</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
                        <p className="text-lg text-blue-200 max-w-3xl mx-auto">
                            Powered by cutting-edge technologies, our products deliver exceptional performance and reliability.
                        </p>
                    </div>
                </ScrollAnimation>

                <div
                    ref={techItemsRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="tech-item bg-gradient-to-br from-blue-900/30 to-blue-800/10 backdrop-blur-sm p-6 rounded-xl text-center"
                        >
                            <div className="text-4xl mb-3">{tech.icon}</div>
                            <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <ScrollAnimation animation="fadeIn">
                        <div className="bg-blue-900/20 backdrop-blur-sm p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Why Our Technology Matters</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Performance</h4>
                                    <p className="text-blue-100">
                                        Our real-time products leverage cutting-edge technology to provide unparalleled performance.
                                        With microsecond response times and robust processing capabilities, you'll never miss a critical data point.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Reliability</h4>
                                    <p className="text-blue-100">
                                        Built with redundancy in mind, our systems maintain 99.99% uptime.
                                        Automatic failover and self-healing architecture ensure your operations continue without interruption.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Scalability</h4>
                                    <p className="text-blue-100">
                                        Start small and grow big. Our systems scale effortlessly from handling thousands to millions of data points per second,
                                        without requiring architectural changes.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Security</h4>
                                    <p className="text-blue-100">
                                        Security isn't an afterthought—it's built into every layer of our technology stack.
                                        From encryption at rest and in transit to comprehensive access controls, your data remains secure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
