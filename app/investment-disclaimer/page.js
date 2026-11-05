import PageHero from "@/components/PageHero";

export const metadata = { title: "Investment Disclaimer | Dalera Properties" };

export default function Page() {
  return (
    <>
      <PageHero title="Investment Disclaimer" />
      <section className="section">
        <div className="container narrow legal">
          <p className="note">Draft content. This page must be completed with Dalera’s actual practices and reviewed by counsel for applicable Pakistani and UAE requirements before launch.</p>
          <p>Information on this website is general and is not a guarantee of returns or personalized legal, tax or financial advice.</p>
          <p>Prices, availability, plans and completion dates may change. Buyers should verify details independently before purchase.</p>
          <p>Values, rents and completion schedules may change, and property investment involves risk.</p>
        </div>
      </section>
    </>
  );
}
