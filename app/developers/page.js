import Link from "next/link";
import PageHero from "@/components/PageHero";
import SmartImage from "@/components/SmartImage";
import { developers, developerImage } from "@/lib/data";

export const metadata = { title: "Explore Dubai Property Developers | Dalera" };

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        title="Discover Dubai’s Leading Developers"
        text="Explore residential communities, distinctive architecture and new developments from six recognized names in Dubai real estate. These descriptions are not claims of authorized agency or partnership status."
      />
      <section className="section">
        <div className="container">
          <ul className="dev-list">
            {developers.map((d) => (
              <li key={d.slug} id={d.slug}>
                <SmartImage src={developerImage(d.slug)} alt={`${d.name} developments`} width="1200" height="800" className="dev-img" />
                <div className="dev-text">
                  <h2>{d.name}</h2>
                  <h3>{d.tagline}</h3>
                  <p>{d.blurb}</p>
                  <Link href={`/properties?developer=${d.slug}`} className="btn btn--line-green">
                    View {d.name} Projects
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
