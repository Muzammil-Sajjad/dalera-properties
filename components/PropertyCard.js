import Link from "next/link";
import { formatPrice } from "@/lib/data";
import SmartImage from "./SmartImage";

export default function PropertyCard({ p }) {
  return (
    <article className="prop-card">
      <div className="prop-visual">
        <SmartImage src={p.image} alt={`${p.name} by ${p.developer}`} width="1200" height="800" />
        <span className="img-tag">{p.developer}</span>
      </div>
      <div className="prop-body">
        <h3>{p.name}</h3>
        <dl className="prop-meta">
          <div><dt>Developer</dt><dd>{p.developer}</dd></div>
          <div><dt>Location</dt><dd>{p.location}</dd></div>
          <div><dt>Property type</dt><dd>{p.type}</dd></div>
          <div><dt>Starting price</dt><dd>{formatPrice(p)}</dd></div>
        </dl>
        <Link href={`/properties/${p.slug}`} className="btn btn--line-green">View Details</Link>
      </div>
    </article>
  );
}
