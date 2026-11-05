"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import LoaderMark from "./LoaderMark";

const MIN_VISIBLE_MS = 900;

// Shows a loader as soon as an internal link is clicked (or back/forward is used)
// and keeps it up until the new page has rendered, for at least MIN_VISIBLE_MS.
export default function RouteLoader() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const startedAt = useRef(0);

  useEffect(() => {
    if (!startedAt.current) return; // first render, or no navigation in progress
    const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - startedAt.current));
    const t = setTimeout(() => {
      startedAt.current = 0;
      setActive(false);
    }, wait);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const start = () => {
      startedAt.current = Date.now();
      setActive(true);
    };
    const onClick = (e) => {
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest("a");
      if (!a || !a.href) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page: nothing to wait for
      start();
    };
    // Capture phase: next/link calls preventDefault() in its own handler, so a
    // normal (bubbling) listener would never see the click as a navigation.
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", start);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", start);
    };
  }, []);

  // Safety net so the overlay can never get stuck.
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      startedAt.current = 0;
      setActive(false);
    }, 8000);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <>
      <div className={`route-bar ${active ? "is-active" : ""}`} aria-hidden="true" />
      <div className={`route-loader ${active ? "is-active" : ""}`} aria-hidden={!active}>
        <LoaderMark label="Loading page" />
      </div>
    </>
  );
}
