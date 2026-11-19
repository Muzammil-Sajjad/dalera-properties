import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import HeroCover from "@/components/HeroCover";
import { properties, site, whatsappHref } from "@/lib/data";

const fmt = (n) => new Intl.NumberFormat("en-US").format(Math.round(n));

/* ---------- files: use them only if they really exist ---------- */
const fileExists = (url) => {
  if (!url) return false;
  if (/^https?:\/\//i.test(url)) return true; // web address
  try {
    return fs.existsSync(path.join(process.cwd(), "public", url.replace(/^\//, "")));
  } catch {
    return false;
  }
};
// Use the path from propertyDetails.js if its file exists, else the automatic one.
const pickFile = (given, auto) => (given && fileExists(given) ? given : fileExists(auto) ? auto : "");

/* ---------- map helpers ---------- */
// Accepts a plain URL or a pasted <iframe ...> code and returns the src.
const embedSrc = (v) => {
  const m = /src=["']([^"']+)["']/i.exec(v || "");
  return m ? m[1] : v || "";
};
// Finds latitude,longitude inside a Google Maps link.
const coords = (u) => {
  const s = u || "";
  const m =
    /@(-?\d+\.\d+),(-?\d+\.\d+)/.exec(s) ||
    /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/.exec(s) ||
    /[?&](?:q|query|ll)=(-?\d+\.\d+),(-?\d+\.\d+)/.exec(s);
  return m ? `${m[1]},${m[2]}` : "";
};

function parseQuarter(h) {
  const m = /Q([1-4])\s*(\d{4})/i.exec(h || "");
  return m ? { q: `Q${m[1]}`, y: m[2] } : null;
}

// "10% booking / 40% construction / 50% handover" becomes payment steps.
function parsePlan(text) {
  const out = [];
  const re = /(\d+(?:\.\d+)?)\s*%\s*([^/,;\d]*)/g;
  let m;
  while ((m = re.exec(text || ""))) {
    let label = m[2].trim().replace(/^(during|on|at|in|upon)\s+/i, "").replace(/\s+(and|&)$/i, "").trim();
    label = label ? label[0].toUpperCase() + label.slice(1) : "Payment";
    out.push({ value: `${m[1]}%`, label });
  }
  const sum = out.reduce((a, s) => a + parseFloat(s.value), 0);
  return out.length >= 2 && Math.abs(sum - 100) < 1 ? out : [];
}

// A PDF opens in a new tab.
function FileLink({ href, className, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

const DocIcon = () => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  return {
    title: p ? `${p.name} by ${p.developer} | ${site.name}` : `Project | ${site.name}`,
    description: p
      ? `${p.name} by ${p.developer} in ${p.location}, Dubai. Starting price, payment plan, handover, location, brochure and floor plan.`
      : `Explore Dubai properties with ${site.name}.`,
  };
}

export default async function PropertyPage({ params }) {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  if (!p) notFound();

  const TBC = "To be confirmed";
  const hand = parseQuarter(p.handover);

  // Brochure and floor plan: real file or nothing.
  const brochure = pickFile(p.brochure, `/brochures/${p.slug}.pdf`);
  const floorPlan = pickFile(p.floorPlan, `/floorplans/${p.slug}.pdf`);

  // Payment plan
  const rawSteps = p.paymentSteps && p.paymentSteps.length ? p.paymentSteps : parsePlan(p.paymentPlan);
  const steps = rawSteps.map((s) => ({ ...s, pct: parseFloat(s.value) || 0 }));
  const totalPct = steps.reduce((a, s) => a + s.pct, 0) || 100;
  const summary = p.paymentSummary || (steps.length ? steps.map((s) => s.pct).join("/") : TBC);

  // Map: embed code/link > coordinates from any Google link > search by name
  const place = [p.name, p.location !== TBC ? p.location : "", "Dubai"].filter(Boolean).join(", ");
  const query = p.mapQuery || place;
  const given = embedSrc(p.mapUrl);
  const isEmbed = /google\.[a-z.]+\/maps\/embed/i.test(given);
  const ll = coords(given) || coords(p.mapLink);
  const mapSrc = isEmbed
    ? given
    : ll
    ? `https://www.google.com/maps?q=${ll}&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  const mapHref =
    p.mapLink ||
    (given && !isEmbed ? given : "") ||
    (ll
      ? `https://www.google.com/maps/search/?api=1&query=${ll}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`);

  return (
    <div className="pdx">
      {/* ===== HERO WITH COVER PHOTO ===== */}
      <section className="pdx-hero">
        <HeroCover src={p.image} />
        <div className="pdx-shade" aria-hidden="true" />
        <div className="container pdx-hero-inner">
          <p className="pdx-crumbs"><Link href="/properties">Properties</Link> / {p.developer}</p>
          <span className="pdx-badge">{p.developer}</span>
          <h1>{p.name}</h1>
          {p.tagline && <p className="pdx-tagline">{p.tagline}</p>}
          <p className="pdx-loc">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" />
            </svg>
            {p.location}, Dubai
          </p>
          <div className="pdx-actions">
            {brochure
              ? <FileLink href={brochure} className="btn btn--gold">View Brochure</FileLink>
              : <a href="#enquire" className="btn btn--gold">Request Brochure</a>}
            {floorPlan
              ? <FileLink href={floorPlan} className="btn btn--line-light">View Floor Plan</FileLink>
              : <a href="#enquire" className="btn btn--line-light">Request Floor Plan</a>}
          </div>
        </div>
      </section>

      {/* ===== FLOATING INFO BAR ===== */}
      <div className="container pdx-bar-wrap">
        <dl className="pdx-infobar">
          <div className="pdx-cell is-price">
            <dt>Starting price</dt>
            <dd>{p.startingPrice ? (<><small>AED</small> {fmt(p.startingPrice)}</>) : "Price on request"}</dd>
            <p>{p.priceNote}</p>
          </div>
          <div className="pdx-cell">
            <dt>Handover</dt>
            <dd>{hand ? <>{hand.q} <span>{hand.y}</span></> : (p.handover || TBC)}</dd>
          </div>
          <div className="pdx-cell">
            <dt>Payment plan</dt>
            <dd>{summary}</dd>
          </div>
          <div className="pdx-cell is-cta">
            <a href="#enquire" className="btn btn--green">Request Latest Pricing</a>
          </div>
        </dl>
        <p className="pdx-verified">Last verified: {p.lastVerified || "not yet verified"}. Prices and availability may change.</p>
      </div>

      {/* ===== PAYMENT PLAN ===== */}
      <section className="section" id="payment">
        <div className="container">
          <h2>Payment Plan</h2>
          <p className="section-lead">
            {p.paymentPlan || "Booking amount, milestones and conditions will be shown here with the date they were last verified."}
          </p>

          {steps.length > 0 && (
            <>
              <div className="pdx-split" role="img" aria-label="Payment plan split">
                {steps.map((s) => (
                  <span key={s.label} style={{ width: `${(s.pct / totalPct) * 100}%` }} />
                ))}
              </div>
              <ol className="pdx-steps">
                {steps.map((s, i) => (
                  <li key={s.label}>
                    <span className="pdx-step-no">0{i + 1}</span>
                    <strong>{s.value}</strong>
                    <span className="pdx-step-label">{s.label}</span>
                    {s.note && <span className="pdx-step-note">{s.note}</span>}
                    {p.startingPrice && (
                      <span className="pdx-step-amt">≈ AED {fmt((p.startingPrice * s.pct) / 100)}</span>
                    )}
                  </li>
                ))}
              </ol>
              {p.startingPrice && (
                <p className="pdx-fine">Amounts are calculated on the starting price. The figures for your unit depend on its actual price. Confirm the schedule with the team.</p>
              )}
            </>
          )}
        </div>
      </section>

      {/* ===== LOCATION MAP ===== */}
      <section className="section section--sand" id="location">
        <div className="container">
          <h2>Location</h2>
          <div className="pdx-map">
            <iframe src={mapSrc} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" title={`${p.name} location map`} />
          </div>
          <a href={mapHref} target="_blank" rel="noopener noreferrer" className="btn btn--green pdx-map-btn">Open in Google Maps</a>
        </div>
      </section>

      {/* ===== BROCHURE + FLOOR PLAN ===== */}
      <section className="section section--green" id="downloads">
        <div className="container">
          <h2>Brochure &amp; Floor Plan</h2>
          <div className="pdx-dls">
            <div className="pdx-dl">
              <DocIcon />
              <h3>Project Brochure</h3>
              <p>Official details and specifications for {p.name}.</p>
              {brochure
                ? <FileLink href={brochure} className="btn btn--gold">View Brochure</FileLink>
                : <a href="#enquire" className="btn btn--gold">Request Brochure</a>}
            </div>
            <div className="pdx-dl">
              <DocIcon />
              <h3>Floor Plan</h3>
              <p>Unit layouts and sizes for the available configurations.</p>
              {floorPlan
                ? <FileLink href={floorPlan} className="btn btn--gold">View Floor Plan</FileLink>
                : <a href="#enquire" className="btn btn--gold">Request Floor Plan</a>}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY ===== */}
      <section className="section" id="enquire">
        <div className="container pdx-enquire">
          <div>
            <h2>Interested in {p.name}?</h2>
            <p>Request the latest pricing, brochure or floor plan, or speak to the {site.name} team.</p>
            <div className="pdx-enquire-btns">
              <a href={whatsappHref} className="btn btn--green" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              <Link href="/contact" className="btn btn--line-green">Book a Consultation</Link>
            </div>
          </div>
          <div className="pdx-form">
            <InquiryForm project={p.name} defaultRequest="Request latest pricing" />
          </div>
        </div>
      </section>

      {/* ===== MOBILE BAR ===== */}
      <div className="pdx-mobile">
        <div>
          <small>Starting from</small>
          <strong>{p.startingPrice ? `AED ${fmt(p.startingPrice)}` : "Price on request"}</strong>
        </div>
        <a href="#enquire" className="btn btn--gold">Enquire</a>
      </div>
    </div>
  );
}