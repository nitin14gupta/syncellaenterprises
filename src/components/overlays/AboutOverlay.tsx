"use client";
import React from "react";

export default function AboutOverlay() {
  return (
    <section className="overlay glass">
      <h2 className="overlay-title">Company Timeline World</h2>
      <p className="overlay-sub">Navigate through Syncella's journey on floating islands.</p>

      <div className="timeline">
        <div className="timeline-node">
          <div className="dot">2025</div>
          <div className="label">Founded &#8226; Company Birth</div>
        </div>
        <div className="timeline-node"><div className="dot">Growth</div><div className="label">Phase 1 &#8226; Team Growth</div></div>
        <div className="timeline-node"><div className="dot">Products</div><div className="label">Launch &#8226; Jilzo &amp; Safarsaathi</div></div>
        <div className="timeline-node"><div className="dot">Future</div><div className="label">Vision &#8226; R&amp;D</div></div>
      </div>

      <div className="stats-grid">
        <div className="card">
          <div className="ring" data-value="2"/>
          <div className="meta"><strong>2</strong> Products</div>
        </div>
        <div className="card">
          <div className="ring" data-value="80"/>
          <div className="meta"><strong>1k+</strong> Beta Users</div>
        </div>
        <div className="card">
          <div className="ring" data-value="50"/>
          <div className="meta"><strong>5+</strong> Team Members</div>
        </div>
      </div>

      <div className="values">
        <span className="orb" data-cursor="magnet">Innovation</span>
        <span className="orb" data-cursor="magnet">Technology</span>
        <span className="orb" data-cursor="magnet">Simplicity</span>
      </div>
    </section>
  );
}


