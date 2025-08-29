"use client";
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";

type SkinName = "bee" | "serpent" | "feather" | "ribbon" | "comet";

interface CursorOptions {
  skin?: SkinName;
  color?: string;
  accent?: string;
  size?: number;
}

interface CursorContextValue extends Required<CursorOptions> {
  setSkin: (s: SkinName) => void;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export const useCursor = () => {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used inside <CursorProvider>");
  return ctx;
};

export default function CursorProvider({ skin = "comet", color = "#22d3ee", accent = "#8b5cf6", size = 16 }: CursorOptions) {
  const [mounted, setMounted] = useState(false);
  const [activeSkin, setActiveSkin] = useState<SkinName>(skin);
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => setMounted(true), []);

  const value = useMemo(() => ({ skin: activeSkin, color, accent, size, setSkin: setActiveSkin }), [activeSkin, color, accent, size]);

  const [touch, setTouch] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setTouch(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <CursorContext.Provider value={value}>
      {mounted && !touch && createPortal(<CursorOverlay prefersReducedMotion={!!prefersReducedMotion} />, document.body)}
    </CursorContext.Provider>
  );
}

function CursorOverlay({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const { skin, color, accent, size } = useCursor();
  const pos = useRef({ x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 });
  const target = useRef({ x: pos.current.x, y: pos.current.y });
  const vel = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const [state, setState] = useState<"default" | "link" | "drag" | "text" | "hide" | "magnet">("default");
  const [accentOverride, setAccentOverride] = useState<string | null>(null);
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const readState = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (!el) return;
      const attr = el.closest('[data-cursor]')?.getAttribute('data-cursor') as typeof state | null;
      const accentAttr = el.closest('[data-cursor-accent]')?.getAttribute('data-cursor-accent');
      setState((attr as any) || "default");
      setAccentOverride(accentAttr || null);
    };
    window.addEventListener("mousemove", readState);
    return () => window.removeEventListener("mousemove", readState);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      pos.current = { ...target.current };
      return;
    }
    const stiffness = 0.18;
    const damping = 0.8;
    const loop = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      vel.current.x = vel.current.x * damping + dx * stiffness;
      vel.current.y = vel.current.y * damping + dy * stiffness;
      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;
      setTrail((prev) => [{ x: pos.current.x, y: pos.current.y }, ...prev].slice(0, 14));
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [prefersReducedMotion]);

  const style: React.CSSProperties = { position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 };
  const common = { x: pos.current.x, y: pos.current.y, color, accent: accentOverride || accent, size, state } as any;

  return (
    <div style={style} aria-hidden>
      {skin === "bee" && <BeeCursor {...common} />}
      {skin === "serpent" && <SerpentCursor {...common} trail={trail} />}
      {skin === "feather" && <FeatherCursor {...common} />}
      {skin === "ribbon" && <RibbonCursor {...common} />}
      {skin === "comet" && <CometCursor {...common} trail={trail} />}
    </div>
  );
}

function BeeCursor({ x, y, color, accent, size, state }: any) {
  const wingAnim = {
    initial: { rotate: -10 },
    animate: { rotate: [-25, 15, -25] as number[] },
    transition: { repeat: Infinity, duration: 0.5, ease: [0.42, 0, 0.58, 1] as any }
  } as const;
  const scale = state === "magnet" ? 1.25 : state === "link" ? 1.2 : state === "drag" ? 0.9 : 1;
  const opacity = state === "hide" ? 0 : 1;
  return (
    <motion.svg width={size * 3} height={size * 2.2} viewBox="0 0 60 44" style={{ position: "absolute", left: x - 30, top: y - 22 }} initial={{ opacity: 0 }} animate={{ opacity, scale }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <ellipse cx="28" cy="22" rx="14" ry="12" fill={color} stroke={accent} strokeWidth="2" />
      <rect x="18" y="14" width="4" height="16" fill={accent} opacity="0.6" />
      <rect x="26" y="14" width="4" height="16" fill={accent} opacity="0.6" />
      <rect x="34" y="14" width="4" height="16" fill={accent} opacity="0.6" />
      <circle cx="44" cy="22" r="7" fill={color} stroke={accent} strokeWidth="2" />
      <circle cx="46.5" cy="20" r="2" fill={accent} />
      {state === "link" && <polygon points="8,22 0,19 0,25" fill={accent} />}
      <motion.ellipse {...wingAnim} cx="30" cy="8" rx="8" ry="5" fill={accent} opacity="0.35" />
      <motion.ellipse {...wingAnim} cx="36" cy="8" rx="8" ry="5" fill={accent} opacity="0.35" style={{ transformOrigin: "36px 8px" }} />
    </motion.svg>
  );
}

function SerpentCursor({ x, y, color, accent, size, state, trail }: any) {
  const opacity = state === "hide" ? 0 : 1;
  const segments = trail.slice(0, 12);
  return (
    <>
      {segments.map((p: any, i: number) => (
        <motion.div key={i} className="rounded-full" style={{ position: "absolute", left: p.x - size / 2, top: p.y - size / 2, width: size, height: size }} initial={{ opacity: 0 }} animate={{ opacity: opacity * Math.max(0.15, 1 - i / 12), scale: Math.max(0.6, 1 - i * 0.05) }} transition={{ type: "spring", stiffness: 250, damping: 20 }}>
          <div className="w-full h-full rounded-full" style={{ boxShadow: `0 0 ${8 - i}px ${Math.max(3 - i, 0)}px ${accent}33`, background: `radial-gradient(circle at 30% 30%, ${color}, ${accent}90)` }} />
        </motion.div>
      ))}
    </>
  );
}

function FeatherCursor({ x, y, color, accent, size, state }: any) {
  const opacity = state === "hide" ? 0 : 1;
  return (
    <motion.svg width={size * 2.2} height={size * 2.2} viewBox="0 0 44 44" style={{ position: "absolute", left: x - 22, top: y - 22 }} initial={{ opacity: 0 }} animate={{ opacity, rotate: [-8, 6, -8] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
      <path d="M10 28 C14 18, 24 10, 34 8 C30 20, 22 30, 12 36 Z" fill={color} stroke={accent} strokeWidth="2" />
      <line x1="10" y1="28" x2="6" y2="40" stroke={accent} strokeWidth="2" />
    </motion.svg>
  );
}

function RibbonCursor({ x, y, color, accent, size, state }: any) {
  const opacity = state === "hide" ? 0 : 1;
  const isActive = state === "link" || state === "magnet";
  const w = isActive ? size * 2.2 : size * 1.6;
  const h = size * 0.9;
  return (
    <motion.div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h, borderRadius: 9999 }} initial={{ opacity: 0 }} animate={{ opacity, scale: isActive ? 1.1 : 1 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
      <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${color}, ${accent})`, boxShadow: `0 4px 18px ${accent}55, inset 0 0 8px #0002` }} />
    </motion.div>
  );
}

function CometCursor({ x, y, color, accent, size, state, trail }: any) {
  const opacity = state === "hide" ? 0 : 1;
  const r = size * 0.7;
  return (
    <>
      <motion.div style={{ position: "absolute", left: x - r, top: y - r, width: r * 2, height: r * 2, borderRadius: "9999px", filter: "blur(0.1px)" }} initial={{ opacity: 0 }} animate={{ opacity, scale: state === "magnet" ? 1.25 : state === "drag" ? 0.9 : 1 }} transition={{ type: "spring", stiffness: 280, damping: 18 }}>
        <div className="w-full h-full rounded-full" style={{ background: `radial-gradient(circle at 30% 30%, ${color}, ${accent})`, boxShadow: `0 0 30px ${accent}77, 0 0 60px ${color}33` }} />
      </motion.div>
      {trail.slice(1, 10).map((p: any, i: number) => (
        <motion.div key={i} style={{ position: "absolute", left: p.x - r / 2, top: p.y - r / 2, width: r, height: r, borderRadius: 9999 }} initial={{ opacity: 0 }} animate={{ opacity: opacity * Math.max(0, 0.5 - i * 0.05), scale: Math.max(0.2, 1 - i * 0.15) }} transition={{ duration: 0.2 }}>
          <div className="w-full h-full rounded-full" style={{ background: `radial-gradient(circle, ${accent}66, transparent)` }} />
        </motion.div>
      ))}
    </>
  );
}


