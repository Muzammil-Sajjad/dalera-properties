"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTORS = [
  ".page-hero .container > *",
  ".section h2",
  ".section .section-lead",
  ".section .prose",
  ".feature-grid > div",
  ".card-grid > *",
  ".steps li",
  ".dev-list li",
  ".dev-tiles li",
  ".faq details",
  ".facts > div",
  ".two-col > div",
  ".split > *",
  ".contact-grid > *",
  ".cta-band .narrow > *",
  ".legal > *",
  ".gallery-fig",
].join(",");

// Adds a fade-and-rise entrance to page sections as they scroll into view.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let io;
    const t = setTimeout(() => {
      const found = [...document.querySelectorAll(SELECTORS)].filter((el) => !el.closest(".hero"));
      const targets = found.filter((el) => !el.parentElement.closest(".reveal-target"));
      // Only animate outermost matches so nested items don't animate twice.
      const set = new Set();
      found.forEach((el) => {
        let p = el.parentElement, nested = false;
        while (p) { if (set.has(p)) { nested = true; break; } p = p.parentElement; }
        if (!nested) set.add(el);
      });
      const list = [...set];
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      list.forEach((el) => {
        const idx = [...el.parentElement.children].indexOf(el);
        el.style.transitionDelay = `${Math.min(idx, 6) * 90}ms`;
        el.classList.add("reveal");
        io.observe(el);
      });
      void targets;
    }, 60);
    return () => {
      clearTimeout(t);
      io && io.disconnect();
    };
  }, [pathname]);

  return null;
}
