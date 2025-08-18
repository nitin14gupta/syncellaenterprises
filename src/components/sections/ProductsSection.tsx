'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollAnimation from '../animations/ScrollAnimation';

interface ProductCardProps {
    name: string;
    description: string;
    image: string;
    delay: number;
}

function ProductCard({ name, description, image, delay }: ProductCardProps) {
    return (
        <motion.div
            className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay * 0.2 }}
            viewport={{ once: true }}
        >
            <div className="h-64 overflow-hidden">
                <motion.img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                <p className="text-blue-200">{description}</p>
                <motion.button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Learn More
                </motion.button>
            </div>
        </motion.div>
    );
}

export default function ProductsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Sample product data - replace with actual products
    const products = [
        {
            id: 1,
            name: "SensorTrack Pro",
            description: "Real-time sensor monitoring system with advanced analytics and AI-driven insights for industrial applications.",
            image: "/images/product-1.jpg" // You'll need to add these images to your public folder
        },
        {
            id: 2,
            name: "DataSense Hub",
            description: "Centralized data management platform for IoT devices with seamless integration capabilities.",
            image: "/images/product-2.jpg"
        },
        {
            id: 3,
            name: "PrecisionSensor X1",
            description: "High-precision environmental monitoring solution with extended battery life and wireless connectivity.",
            image: "/images/product-3.jpg"
        }
    ];

    return (
        <section id="products" className="py-24 bg-gradient-to-b from-blue-950 to-black">
            <div className="container mx-auto px-4">
                <div ref={ref} className="text-center mb-16">
                    <ScrollAnimation animation="fadeIn">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
                        <p className="text-lg text-blue-200 max-w-3xl mx-auto">
                            Cutting-edge real-time products designed to transform how businesses gather and utilize data.
                        </p>
                    </ScrollAnimation>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            description={product.description}
                            image={product.image}
                            delay={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
