import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/data";

export const metadata = { title: "Dubai Property Advisory Services | Addax" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Personalized Real Estate Guidance, Wherever You Are"
        text="Exploring Dubai property opportunities should be clear, convenient and focused on your goals."
      />
      <section className="section">
        <div className="container">
          <div className="feature-grid three">
            {services.map(([t, d]) => (<div key={t}><h3>{t}</h3><p>{d}</p></div>))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Your Goals. Our Focus."
        text="Whether you are exploring your first overseas purchase or evaluating another property, Addax Properties aims to help you move forward with clarity."
        label="Book Your Consultation"
      />
    </>
  );
}
