"use client";

import { useEffect, useState } from "react";
import LoaderMark from "./LoaderMark";

const MIN_VISIBLE_MS = 1400;

// Full-screen loader shown while the site first loads.
export default function SiteLoader() {
  const [phase, setPhase] = useState("show"); // show | hide | gone

  useEffect(() => {
    let cancelled = false;
    const start = performance.now();
    document.body.style.overflow = "hidden";

    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      setTimeout(() => {
        if (cancelled) return;
        setPhase("hide");
        document.body.style.overflow = "";
        setTimeout(() => !cancelled && setPhase("gone"), 650);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      cancelled = true;
      document.body.style.overflow = "";
      window.removeEventListener("load", finish);
    };
  }, []);

  if (phase === "gone") return null;
  return (
    <div className={`site-loader ${phase === "hide" ? "is-hidden" : ""}`}>
      <LoaderMark label="Loading Dalera Properties" />
    </div>
  );
}
