import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { faqs } from "@/lib/data";

export const metadata = { title: "Why Invest in Dubai Real Estate? | Addax" };

const reasons = [
  ["International Ownership", "Foreign buyers can generally purchase in designated freehold areas, subject to UAE rules."],
  ["Rental Income Potential", "Residential properties may generate income, affected by demand, occupancy and operating costs."],
  ["Potential Capital Appreciation", "Values may rise or fall; returns are never guaranteed."],
  ["Off-Plan Options", "Some projects offer installment-based payment plans with different risks and terms."],
  ["Connectivity and Lifestyle", "International access, education, healthcare, retail and residential amenities."],
  ["Residency Possibilities", "Certain qualifying purchases may support residence applications, subject to current rules and individual eligibility."],
];

export default function WhyDubaiPage() {
  return (
    <>
      <PageHero
        title="Invest Beyond Borders. Explore New Possibilities."
        text="Discover what makes Dubai an internationally recognized destination for property ownership and investment."
      />
      <section className="section">
        <div className="container split">
          <h2>A Global Real Estate Destination</h2>
          <div className="prose">
            <p>Dubai offers a range of residential properties, modern infrastructure, global connectivity and established communities. Pakistani buyers can explore opportunities for personal ownership, long-term investment or future residence, subject to the relevant laws and conditions.</p>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <h2>Key Reasons to Explore Dubai</h2>
          <div className="feature-grid three">
            {reasons.map(([t, d]) => (<div key={t}><h3>{t}</h3><p>{d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2>Dubai Property Opportunities, Closer to Home</h2>
            <p>You can start exploring properties from Pakistan by reviewing project information, comparing available options and discussing your preferences with Addax Properties through online consultations.</p>
          </div>
          <div>
            <h2>Every Great Investment Begins with an Informed Decision</h2>
            <p>Evaluate developer credentials, location, ownership structure, purchase expenses, payment obligations, construction timelines and market risk. Pakistani buyers must also consider applicable foreign-exchange, remittance and tax requirements.</p>
          </div>
        </div>
      </section>

      <section className="section section--sand" id="faq">
        <div className="container narrow">
          <h2>Frequently Asked Questions</h2>
          <div className="faq">
            {faqs.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to talk it through?" label="Speak to Our Team" />
    </>
  );
}
