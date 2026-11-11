import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata = { title: "About Addax Properties | Dubai Real Estate Advisory" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Built on Trust. Driven by Your Vision."
        text="Connecting ambitions across borders through personalized real estate guidance."
      />
      <section className="section">
        <div className="container split">
          <h2>Who We Are</h2>
          <div className="prose">
            <p>Addax Properties is a real estate advisory brand focused on helping Pakistani investors and property buyers explore opportunities in Dubai.</p>
            <p>Our approach brings together market knowledge, personalized consultation and a commitment to making property discovery easier to understand. We recognize that purchasing property abroad is an important decision. That is why our focus is on helping clients explore their options with clarity, confidence and convenience.</p>
            <p>From your first inquiry to evaluating potential properties, we aim to make every step more informed and approachable.</p>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container two-col">
          <div>
            <h2>Our Mission</h2>
            <p>To connect Pakistani investors with Dubai real estate opportunities through personalized guidance, transparent communication and a client-first approach.</p>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>To become a trusted name for Pakistan-based buyers seeking international real estate opportunities, recognized for meaningful relationships and thoughtful property guidance.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="feature-grid three">
            <div><h3>Trust</h3><p>Long-term relationships built through honesty and responsible communication.</p></div>
            <div><h3>Quality</h3><p>Relevant opportunities, clear information and meaningful client experiences.</p></div>
            <div><h3>Growth</h3><p>Helping clients explore opportunities that align with their ambitions.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="container narrow">
          <h2>Your Goals Deserve Our Attention</h2>
          <p>Real estate advisory should go beyond presenting listings. It should begin with understanding your ambitions, answering your questions and helping you evaluate options with care. At Addax Properties, every property journey is personal.</p>
        </div>
      </section>

      <CtaBand title="Get to Know Us" text="Tell us about your goals and we will help you explore Dubai property options." />
    </>
  );
}
