'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationProps {
    children: React.ReactNode;
    animation: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scale';
    delay?: number;
    duration?: number;
    triggerPosition?: string; // e.g., "top center"
    className?: string;
}

export default function ScrollAnimation({
    children,
    animation,
    delay = 0,
    duration = 1,
    triggerPosition = 'top 80%',
    className = '',
}: ScrollAnimationProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const element = elementRef.current;
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: triggerPosition,
                toggleActions: 'play none none none',
            },
        });

        switch (animation) {
            case 'fadeIn':
                tl.fromTo(
                    element,
                    { opacity: 0 },
                    { opacity: 1, duration, delay }
                );
                break;
            case 'fadeInUp':
                tl.fromTo(
                    element,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration, delay }
                );
                break;
            case 'fadeInLeft':
                tl.fromTo(
                    element,
                    { opacity: 0, x: -50 },
                    { opacity: 1, x: 0, duration, delay }
                );
                break;
            case 'fadeInRight':
                tl.fromTo(
                    element,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration, delay }
                );
                break;
            case 'scale':
                tl.fromTo(
                    element,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration, delay }
                );
                break;
            default:
                break;
        }

        return () => {
            // Cleanup
            if (tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
        };
    }, [animation, delay, duration, triggerPosition]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
}
