"use client";
import React from "react";
import { useProgress } from "@/components/ProgressProvider";

export default function FinalOverlay() {
  const { reset, goNext } = useProgress();
  return (
    <section className="overlay glass">
      <h2 className="overlay-title">Mission Complete</h2>
      <p className="overlay-sub">You've explored every world. Earned: Timeline Explorer, Product Explorer, Tech Stack Master, Communication Expert.</p>
      <div className="products-grid">
        <div className="p-card"><h3>Badges</h3><ul><li>Timeline Explorer</li><li>Values Collector</li><li>Product Explorer</li><li>Tech Stack Master</li><li>Communication Expert</li></ul></div>
        <div className="p-card"><h3>XP</h3><p>Total: 100 XP</p><ul><li>About: 25</li><li>Products: 25</li><li>Services: 15</li><li>Contact: 35</li></ul></div>
        <div className="p-card"><h3>What’s Next?</h3><p>Join our beta programs, follow our builds, or reach out for collaboration.</p><div className="btn-row"><button className="btn-ghost" data-cursor="link">Join Beta</button><button className="btn-ghost" data-cursor="link">Follow</button></div></div>
      </div>
      <div style={{display:'flex',gap:8}}>
        <button className="btn-cta" data-cursor="magnet" onClick={goNext}>Restart Journey</button>
        <button className="btn-ghost" data-cursor="link" onClick={reset}>Reset Progress</button>
      </div>
    </section>
  );
}