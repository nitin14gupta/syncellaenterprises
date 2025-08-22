"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function AnimatedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [elevated, setElevated] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setElevated(latest > 8);
  });

  useEffect(() => {
    const handler = () => setIsOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  // Active section highlighting
  const [active, setActive] = useState<string>("home");
  useEffect(() => {
    const sections = ["home", "about", "products", "careers", "contact"];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkCls = useMemo(
    () => (id: string) => `hover:text-blue-600 ${active === id ? "text-blue-600" : ""}`,
    [active]
  );

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={`sticky top-0 z-50 backdrop-blur ${
        elevated ? "bg-background/70 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight">Syncella Enterprise</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className={linkCls("home")}>Home</a>
          <a href="#about" className={linkCls("about")}>About</a>
          <a href="#products" className={linkCls("products")}>Products</a>
          <a href="#careers" className={linkCls("careers")}>Careers</a>
          <a href="#contact" className={linkCls("contact")}>Contact</a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-black/10 px-3 py-2 text-sm"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-black/10"
        >
          <div className="px-6 py-3 flex flex-col gap-3 text-sm">
            <a href="#home" className={linkCls("home")}>Home</a>
            <a href="#about" className={linkCls("about")}>About</a>
            <a href="#products" className={linkCls("products")}>Products</a>
            <a href="#careers" className={linkCls("careers")}>Careers</a>
            <a href="#contact" className={linkCls("contact")}>Contact</a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}

