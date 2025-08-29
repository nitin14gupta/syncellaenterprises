"use client";
import React from "react";

export default function ServicesOverlay() {
  return (
    <section className="overlay glass">
      <h2 className="overlay-title">Technology Matrix</h2>
      <div className="matrix">
        <div className="col"><h4>Frontend</h4><ul><li>React</li><li>Next.js</li><li>Three.js</li></ul></div>
        <div className="col"><h4>Backend</h4><ul><li>Node.js</li><li>Python</li><li>Django</li></ul></div>
        <div className="col"><h4>Mobile</h4><ul><li>React Native</li><li>Flutter</li></ul></div>
        <div className="col"><h4>AI/ML</h4><ul><li>Machine Learning</li><li>AI APIs</li></ul></div>
      </div>

      <div className="platforms">
        <div className="plat">
          <h5>Product Development</h5>
          <ul><li>Full stack</li><li>UI/UX</li><li>Testing</li></ul>
        </div>
        <div className="plat">
          <h5>Consultation & Strategy</h5>
          <ul><li>Tech strategy</li><li>Market analysis</li><li>Roadmapping</li></ul>
        </div>
        <div className="plat">
          <h5>Development & Deployment</h5>
          <ul><li>MVP creation</li><li>Scaling</li><li>Maintenance</li></ul>
        </div>
      </div>
    </section>
  );
}


