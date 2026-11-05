import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Page not found | Dalera Properties" };

export default function NotFound() {
  return (
    <PageHero title="This page could not be found" text="The link may be old or the page may have moved.">
      <Link href="/" className="btn btn--gold">Back to Home</Link>
    </PageHero>
  );
}
