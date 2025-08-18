'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAnime } from '@/hooks/useAnime';

export default function HeroSection() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const { animate, isReady } = useAnime();

    useEffect(() => {
        if (!isReady) return;

        // Animation for the title with staggered text animation
        if (titleRef.current) {
            // Split text into spans
            const text = titleRef.current.innerText;
            titleRef.current.innerHTML = '';
            text.split('').forEach((char, i) => {
                const span = document.createElement('span');
                span.innerText = char;
                span.style.display = 'inline-block';
                span.style.opacity = '0';
                titleRef.current?.appendChild(span);
            });

            animate({
                targets: titleRef.current.querySelectorAll('span'),
                opacity: [0, 1],
                translateY: [50, 0],
                translateX: [20, 0],
                scale: [0.8, 1],
                duration: 1200,
                delay: function (el: any, i: number) { return 40 * i; },
                easing: 'easeOutExpo',
            });
        }

        // Animation for subtitle
        if (subtitleRef.current) {
            animate({
                targets: subtitleRef.current,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                delay: 800,
                easing: 'easeOutExpo',
            });
        }
    }, [isReady, animate]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-blue-900">
            {/* Background animated particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full"
                        animate={{
                            x: [
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                            ],
                            y: [
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                            ],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, Math.random() * 3 + 1, 1],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Syncella Enterprises
                    </h1>
                    <p
                        ref={subtitleRef}
                        className="text-xl md:text-2xl text-blue-200 mb-12 opacity-0"
                    >
                        Pioneering real-time sensor products for tomorrow's technological challenges
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Products
                        </motion.button>
                        <motion.button
                            className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:border-blue-300 hover:text-blue-300 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            About Us
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5L12 19M12 19L6 13M12 19L18 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.div>
        </section>
    );
}
