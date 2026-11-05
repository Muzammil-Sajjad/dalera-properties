import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import PropertiesBrowser from "@/components/PropertiesBrowser";
import { categories } from "@/lib/data";

export const metadata = { title: "Dubai Properties for Sale | Dalera Properties" };

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        title="Discover Your Next Opportunity in Dubai"
        text="Explore new launches, off-plan developments and luxury residences across Dubai. Browse a growing selection, compare developers and locations, and identify opportunities suited to your goals."
      />
      <section className="section section--sand">
        <div className="container">
          <div className="feature-grid three">
            {categories.map((c) => (
              <div key={c.title}><h3>{c.title}</h3><p>{c.text}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Suspense fallback={<p>Loading projects…</p>}>
            <PropertiesBrowser />
          </Suspense>
        </div>
      </section>
    </>
  );
}
