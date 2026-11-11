import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { site, whatsappHref } from "@/lib/data";

export const metadata = { title: "Contact Addax Properties | Dubai Real Estate" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Your Dubai Property Journey Starts Here"
        text="Have a question, a preferred development or an investment goal? Share your requirements and connect with Addax Properties. We will help you explore relevant property opportunities."
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <InquiryForm />
          </div>
          <aside className="contact-side">
            <h2>Contact details</h2>
            <dl>
              <div><dt>Phone / WhatsApp</dt><dd>{site.phone}</dd></div>
              {/* <div><dt>Email</dt><dd>{site.email}</dd></div> */}
              <div><dt>Office</dt><dd>{site.address}</dd></div>
              <div><dt>Business hours</dt><dd>{site.hours}</dd></div>
            </dl>
            <a href={whatsappHref} className="btn btn--green" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
