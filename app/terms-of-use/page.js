import PageHero from "@/components/PageHero";

export const metadata = { title: "Terms of Use | Addax Properties" };

export default function Page() {
  return (
    <>
      <PageHero title="Terms of Use" />
      <section className="section">
        <div className="container narrow legal">
          <p className="note">Draft content. This page must be completed with Addax’s actual practices and reviewed by counsel for applicable Pakistani and UAE requirements before launch.</p>
          <h2>Informational purpose</h2>
          <p>This website provides general information about Dubai property and is not an offer to sell.</p>
          <h2>Acceptable use</h2>
          <p>Use the website lawfully and do not misuse its forms or content.</p>
          <h2>Third-party content</h2>
          <p>Developer names, images and project details belong to their respective owners.</p>
          <h2>Ownership of assets</h2>
          <p>Website content and branding are the property of Addax Properties unless stated otherwise.</p>
          <h2>Updates, liability and applicable law</h2>
          <p>These terms may be updated. Liability limits and governing law will be confirmed with counsel.</p>
        </div>
      </section>
    </>
  );
}
