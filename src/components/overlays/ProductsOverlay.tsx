"use client";
import React from "react";

export default function ProductsOverlay() {
  return (
    <section className="overlay glass">
      <h2 className="overlay-title">Products Galaxy</h2>
      <div className="products-grid">
        <div className="p-card">
          <h3>Jilzo Planet</h3>
          <p>Social micro-content world with house-party vibes.</p>
          <div className="btn-row">
            <button className="btn-ghost" data-cursor="link">Live Demo</button>
            <button className="btn-ghost" data-cursor="link">Beta</button>
          </div>
          <ul>
            <li>Quick interactions</li>
            <li>Social elements</li>
            <li>Party energy</li>
          </ul>
        </div>
        <div className="p-card">
          <h3>Safarsaathi Planet</h3>
          <p>Travel safety companion made for India.</p>
          <div className="btn-row">
            <button className="btn-ghost" data-cursor="link">Learn More</button>
            <button className="btn-ghost" data-cursor="link">Demo</button>
          </div>
          <ul>
            <li>Safety tips</li>
            <li>Area awareness</li>
            <li>Trip sharing</li>
          </ul>
        </div>
        <div className="p-card">
          <h3>Mystery Planet</h3>
          <p>Next-gen product • AI-driven • 2025 launch window.</p>
          <div className="btn-row">
            <button className="btn-ghost" data-cursor="link">Subscribe</button>
          </div>
          <ul>
            <li>Innovation</li>
            <li>Exploration</li>
            <li>Sneak peeks</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


