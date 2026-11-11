import Link from "next/link";
import { notFound } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import SmartImage from "@/components/SmartImage";
import { properties, formatPrice } from "@/lib/data";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  return { title: p ? `${p.name} by ${p.developer} | Addax Properties` : "Project | Addax Properties" };
}

export default async function PropertyPage({ params }) {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  if (!p) notFound();

  const facts = [
    ["Starting price", formatPrice(p)],
    ["Property type", p.type],
    ["Bedrooms", p.bedrooms],
    ["Project status", p.status],
    ["Handover date", p.handover],
    ["Last verified", p.lastVerified || "Not yet verified"],
  ];

  return (
    <>
      <section className="page-hero prop-hero" style={{ "--hero-img": `url(${p.image})` }}>
        <div className="container">
          <p className="crumbs"><Link href="/properties">Properties</Link> / {p.developer}</p>
          <h1>{p.name}</h1>
          <p className="lead">{p.developer} · {p.location}</p>
          <div className="btn-row">
            <a href="#enquire" className="btn btn--gold">Request Latest Pricing</a>
            <a href="#enquire" className="btn btn--line-light">Download Brochure</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <h2>Overview</h2>
          <div className="prose">
            {p.overview ? (
              <p>{p.overview}</p>
            ) : (
              <p>
                Discover {p.name}, a residential development by {p.developer} located in{" "}
                {p.location === "To be confirmed" ? "[Community]" : p.location}, Dubai. Explore
                available configurations and current purchasing arrangements to see whether this
                opportunity aligns with your needs.
              </p>
            )}
            <p className="note">Project details are being verified and will be published with their source and a last-updated date.</p>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <h2>Project Facts</h2>
          <dl className="facts">
            {facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {/* <section className="section">
        <div className="container two-col">
          <div>
            <h2>Gallery &amp; Plans</h2>
            <figure className="gallery-fig">
              <SmartImage src={p.image} alt={p.name} width="1200" height="800" />
              <figcaption>Approved renders, photos, floor plans and maps will appear here.</figcaption>
            </figure>
          </div>
          <div>
            <h2>Amenities</h2>
            {p.amenities.length ? (
              <ul className="plain-list">{p.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
            ) : (
              <p>Amenities will be listed once confirmed in official project documents.</p>
            )}
          </div>
        </div>
      </section> */}

      <section className="section section--sand">
        <div className="container two-col">
          <div>
            <h2>Payment Plan</h2>
            <p>{p.paymentPlan || "Booking amount, milestones and conditions will be shown here with the date they were last verified."}</p>
          </div>
          <div>
            <h2>Investment Considerations</h2>
            <p>
              Purchase costs, service charges and fees apply beyond the listed price. Off-plan
              projects carry completion and timeline uncertainty, and values and rents may rise or
              fall. Returns are never guaranteed.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--green" id="enquire">
        <div className="container narrow">
          <h2>Interested in {p.name}?</h2>
          <p>Request the official brochure, review available units and speak to the Addax Properties team for the latest confirmed information.</p>
          <div className="form-on-green">
            <InquiryForm project={p.name} defaultRequest="Request latest pricing" />
          </div>
        </div>
      </section>
    </>
  );
}
