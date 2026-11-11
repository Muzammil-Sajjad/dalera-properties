"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Addax Properties home">
          <img src="/images/logo.png" alt="Addax Properties" width="900" height="224" className="brand-logo" />
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="main-nav" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-current" : ""}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn--gold nav-cta">Book a Consultation</Link>
        </nav>
      </div>
    </header>
  );
}
