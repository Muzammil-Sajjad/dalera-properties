"use client";

import Link from "next/link";
import { useState } from "react";
import { developers } from "@/lib/data";

// Quick finder in the hero. It builds a link, so the route loader runs on click.
export default function HeroSearch() {
  const [dev, setDev] = useState("");
  const href = dev ? `/properties?developer=${dev}` : "/properties";

  return (
    <div className="hero-card">
      <h2>Find a Dubai project</h2>
      <p>Start with a developer, or browse everything we are featuring.</p>
      <div className="field">
        <label htmlFor="hero-dev">Developer</label>
        <select id="hero-dev" value={dev} onChange={(e) => setDev(e.target.value)}>
          <option value="">All six developers</option>
          {developers.map((d) => (
            <option key={d.slug} value={d.slug}>{d.name}</option>
          ))}
        </select>
      </div>
      <Link href={href} className="btn btn--gold hero-card-btn">Search Properties</Link>
      <Link href="/contact" className="hero-card-link">Prefer to talk first? Book a consultation</Link>
    </div>
  );
}
