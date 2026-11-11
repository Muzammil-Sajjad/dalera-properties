import Link from "next/link";
import { navLinks, footerLegal, site } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/images/logo.png" alt="Addax Properties" width="900" height="224" className="footer-logo" />
          <p className="footer-tag">{site.tagline}</p>
          <p className="footer-copy">
            Connecting Pakistani buyers and investors with Dubai property opportunities through
            personalized guidance and a commitment to trust.
          </p>
          <SocialLinks />
        </div>
        <div>
          <p className="footer-head">Explore</p>
          <ul className="footer-list">
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-head">Legal</p>
          <ul className="footer-list">
            {footerLegal.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-head">Contact</p>
          <ul className="footer-list">
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li>{site.address}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <p>© 2026 Addax Properties. All rights reserved.</p>
        <p>Prices, availability and completion dates may change. Not a guarantee of returns.</p>
      </div>
    </footer>
  );
}
