'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollAnimation from '../animations/ScrollAnimation';
import InteractiveGlobe from '../3d/InteractiveGlobe';

export default function AboutSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        },
    };

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-black to-blue-950">
            <div className="container mx-auto px-4">
                <div ref={ref} className="text-center mb-16">
                    <ScrollAnimation animation="fadeIn">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Syncella Enterprises</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
                        <p className="text-lg text-blue-200 max-w-3xl mx-auto">
                            We're a product-focused company specializing in developing cutting-edge sensor technologies and real-time monitoring solutions.
                        </p>
                    </ScrollAnimation>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="space-y-8"
                        >
                            <motion.div variants={itemVariants}>
                                <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                                <p className="text-gray-300">
                                    To create revolutionary sensor products and real-time monitoring systems that transform
                                    how industries gather, analyze, and utilize critical data for better decision-making.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                                <p className="text-gray-300">
                                    To be the global leader in sensor technology, setting industry standards and
                                    pioneering innovations that shape the future of real-time data monitoring and analysis.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h3 className="text-2xl font-bold text-white mb-3">Our Values</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-blue-900/30 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-400">Innovation</h4>
                                        <p className="text-gray-300 text-sm">We embrace creative thinking and cutting-edge solutions.</p>
                                    </div>
                                    <div className="bg-blue-900/30 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-400">Excellence</h4>
                                        <p className="text-gray-300 text-sm">We strive for the highest quality in everything we do.</p>
                                    </div>
                                    <div className="bg-blue-900/30 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-400">Collaboration</h4>
                                        <p className="text-gray-300 text-sm">We work together to achieve exceptional results.</p>
                                    </div>
                                    <div className="bg-blue-900/30 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-400">Integrity</h4>
                                        <p className="text-gray-300 text-sm">We build trust through honest and ethical practices.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="order-1 md:order-2 aspect-square w-full max-w-md mx-auto">
                        <ScrollAnimation animation="scale" className="h-full">
                            <InteractiveGlobe />
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
}
