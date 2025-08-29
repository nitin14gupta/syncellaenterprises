"use client";
import React from "react";

export default function ContactOverlay() {
  return (
    <section className="overlay glass">
      <h2 className="overlay-title">Communication Command Center</h2>

      <div className="contact-grid">
        <form className="holo-form" onSubmit={(e) => e.preventDefault()}>
          <label>Name<input placeholder="Your name" /></label>
          <label>Email<input type="email" placeholder="you@domain.com" /></label>
          <label>Project<select><option>Web Development</option><option>Mobile App</option><option>Consultation</option></select></label>
          <label>Message<textarea rows={3} placeholder="Tell us a bit about your project" /></label>
          <button className="btn-cta" type="submit" data-cursor="magnet">Launch Message</button>
        </form>
        <aside className="holo-side">
          <div className="map">🌍 Mumbai, India (HQ)</div>
          <ul className="status">
            <li>Status: <span className="green">Available</span></li>
            <li>Timezone: IST (GMT+5:30)</li>
            <li>Response: within 24 hours</li>
          </ul>
          <div className="socials">
            <a data-cursor="link">LinkedIn</a>
            <a data-cursor="link">Instagram</a>
            <a data-cursor="link">Email</a>
            <a data-cursor="link">Phone</a>
          </div>
        </aside>
      </div>
    </section>
  );
}


