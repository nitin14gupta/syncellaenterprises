"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseParallaxOptions = {
  speed?: number; // positive moves slower on scroll
  scrub?: boolean | number;
  start?: string;
  end?: string;
};

export function useParallax<T extends HTMLElement = HTMLElement>({
  speed = 0.2,
  scrub = true,
  start = "top bottom",
  end = "bottom top",
}: UseParallaxOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const yMove = (index: number, target: Element) => `+=${(1 - speed) * 60}`;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: yMove as any,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [speed, scrub, start, end]);

  return ref;
}

export function useRevealOnScroll<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);
  return ref;
}


