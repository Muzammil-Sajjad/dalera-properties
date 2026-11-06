import Link from "next/link";
import HeroSearch from "@/components/HeroSearch";
import HeroVideo from "@/components/HeroVideo";
import SmartImage from "@/components/SmartImage";
import PropertyCard from "@/components/PropertyCard";
import CtaBand from "@/components/CtaBand";
import { developers, properties, developerImage } from "@/lib/data";
import Image from "next/image";

export default function HomePage() {
  // One featured project per developer, until the real selection is supplied.
  const featured = developers.map((d) => properties.find((p) => p.developerSlug === d.slug));

  return (
    <>
      <section className="hero">
        <HeroVideo />
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>From Your Home to Dubai’s Finest.</h1>
            <p className="lead">
              Discover exceptional properties and investment opportunities in Dubai with Dalera
              Properties. From exploring your options to making informed decisions, we bring
              personalized real estate guidance closer to home.
            </p>
            <div className="btn-row">
              <Link href="/properties" className="btn btn--gold">Explore Properties</Link>
              <Link href="/contact" className="btn btn--line-light">Book a Consultation</Link>
            </div>
          </div>
          <HeroSearch />
        </div>

        <ul className="hero-devs container" aria-label="Featured developers">
          {developers.map((d) => (
            <li key={d.slug}>
              <Link href={`/properties?developer=${d.slug}`}>
                <Image
                  src={d.logo}
                  alt={`${d.name} logo`}
                  width={120}
                  height={60}
                  className="developer-logo"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Your Gateway to Dubai Real Estate</h2>
          </div>
          <div className="prose">
            <p>
              At Dalera Properties, we believe that investing beyond borders should feel
              straightforward, informed, and accessible. We connect Pakistani buyers and investors
              with carefully considered real estate opportunities in Dubai, offering personalized
              guidance to help them navigate the market with confidence.
            </p>
            <p>
              Whether you are looking to diversify your investment portfolio, purchase a second
              home, or explore Dubai’s newest developments, Dalera Properties is here to help you
              find an opportunity aligned with your vision.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <h2>Discover Dubai’s Finest Properties</h2>
          <p className="section-lead">
            Explore a selection of new and upcoming residential developments from established
            names in Dubai real estate. Discover contemporary apartments, vibrant communities,
            waterfront residences, and luxury villas suited to your lifestyle and investment
            ambitions.
          </p>
          <div className="card-grid">
            {featured.map((p) => <PropertyCard key={p.slug} p={p} />)}
          </div>
          <div className="center mt">
            <Link href="/properties" className="btn btn--green">Explore Properties</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Explore Properties by Developer</h2>
          <p className="section-lead">
            Discover opportunities by Emaar, Danube, Binghatti, DAMAC, Imtiaz and Azizi.
          </p>
          <ul className="dev-tiles">
            {developers.map((d) => (
              <li key={d.slug}>
                <Link href={`/properties?developer=${d.slug}`}>
                  <SmartImage src={developerImage(d.slug)} alt={`${d.name} developments`} width="1200" height="800" />
                  <span>{d.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/developers" className="btn btn--line-green mt">Explore Developers</Link>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <h2>Your Investment Journey, Our Priority</h2>
          <div className="feature-grid">
            <div><h3>Personalized Guidance</h3><p>Explore opportunities based on your preferences, budget and long-term plans.</p></div>
            <div><h3>Clarity &amp; Transparency</h3><p>Understand property options through clearer information and communication.</p></div>
            <div><h3>Access to Developments</h3><p>Explore new projects, off-plan opportunities and residential communities.</p></div>
            <div><h3>Convenience from Pakistan</h3><p>Begin your property journey through remote consultations.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>A City of Opportunity</h2>
            <Link href="/why-dubai" className="btn btn--line-green mt">Discover Why Dubai</Link>
          </div>
          <div className="prose">
            <p>
              Dubai draws international interest for its architecture, lifestyle, global
              connectivity and diverse property market. Explore options for long-term ownership,
              personal use or investment, while evaluating the associated risks and costs.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <h2>Your Dubai Property Journey, Made Simple</h2>
          <ol className="steps">
            <li><h3>Share your goals and budget</h3><p>Tell us what you want from a Dubai property.</p></li>
            <li><h3>Explore projects and payment options</h3><p>Review relevant projects and how they can be paid for.</p></li>
            <li><h3>Compare costs, timelines, locations and risks</h3><p>Weigh each option side by side.</p></li>
            <li><h3>Receive purchase guidance</h3><p>Understand the purchasing process and your next steps.</p></li>
          </ol>
        </div>
      </section>

      <CtaBand
        title="Your Next Investment Could Begin at Home"
        text="Your Dubai property journey begins with a conversation. Connect with Dalera Properties to explore opportunities tailored to your goals."
        label="Speak to Our Team"
      />
    </>
  );
}
