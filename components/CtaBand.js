import Link from "next/link";

export default function CtaBand({ title, text, label = "Book a Consultation", href = "/contact" }) {
  return (
    <section className="section section--green cta-band">
      <div className="container narrow center">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        <Link href={href} className="btn btn--gold">{label}</Link>
      </div>
    </section>
  );
}
