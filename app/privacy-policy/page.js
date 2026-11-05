import PageHero from "@/components/PageHero";

export const metadata = { title: "Privacy Policy | Dalera Properties" };

export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section">
        <div className="container narrow legal">
          <p className="note">Draft content. This page must be completed with Dalera’s actual practices and reviewed by counsel for applicable Pakistani and UAE requirements before launch.</p>
          <h2>Personal data we collect</h2>
          <p>Name, email address, WhatsApp or phone number, location, budget, property preferences and messages you send through our forms.</p>
          <h2>Why we collect it</h2>
          <p>To respond to your inquiries, share project information and arrange consultations.</p>
          <h2>WhatsApp and CRM processing</h2>
          <p>Inquiries may be handled through WhatsApp and a customer relationship management system used by our team.</p>
          <h2>Cookies and analytics</h2>
          <p>We may use cookies and analytics to understand how the website is used, with consent where required.</p>
          <h2>Retention, third parties and your rights</h2>
          <p>Retention periods, third-party recipients, your rights over your data and our contact details will be set out here.</p>
        </div>
      </section>
    </>
  );
}
