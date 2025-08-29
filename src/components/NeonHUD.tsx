"use client";
import React from "react";
import { useProgress } from "@/components/ProgressProvider";

export default function NeonHUD() {
  const { progress, goNext, stepIndex } = useProgress();
  const labels = ["Get Started", "E", "View Services", "Visit Products", "Contact", "Restart Journey"];
  return (
    <div className="neon-hud pointer-events-auto">
      {stepIndex === 0 && (
        <main className="hud-hero">
          <h1 className="title">Syncella Enterprises</h1>
          <p className="subtitle">Welcome to the Syncella Universe</p>
          <div className="cta-row">
            <button className="btn-cta" data-cursor="magnet" onClick={goNext}>{labels[stepIndex]}</button>
          </div>
        </main>
      )}
      <footer className="hud-footer bottom">
        <div className="stat">Exploration: <span>{Math.round(progress)}%</span></div>
        <div className="dots"/>
      </footer>
    </div>
  );
}


