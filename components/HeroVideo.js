"use client";

import { useEffect, useRef, useState } from "react";

// Background video for the hero. Drop a file at /public/videos/hero.mp4.
// Without the file, an animated brand backdrop is shown instead.
export default function HeroVideo() {
  const ref = useRef(null);
  const [broken, setBroken] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      return;
    }
    v.play?.().catch(() => {});
    if (v.readyState >= 2) setReady(true);
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      <div className="hero-fallback">
        <img src="/images/icon.png" alt="" />
      </div>
      {!broken && (
        <video
          ref={ref}
          className={`hero-video ${ready ? "is-ready" : ""}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setReady(true)}
          onError={() => setBroken(true)}
        >
          <source src="/videos/uae.mp4" type="video/mp4" onError={() => setBroken(true)} />
        </video>
      )}
    </div>
  );
}
