export default function PageHero({ title, text, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
        {children}
      </div>
    </section>
  );
}
