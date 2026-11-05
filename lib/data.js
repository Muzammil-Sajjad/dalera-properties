// Central content file. Replace placeholders with client-verified data before launch.

export const site = {
  name: "Dalera Properties",
  tagline: "From Your Home to Dubai’s Finest.",
  // CLIENT TO SUPPLY
  phone: "[Official phone / WhatsApp]",
  email: "[Email]",
  address: "[Office address]",
  hours: "[Business hours]",
  whatsappNumber: "", // digits only, e.g. 923001234567
  // Paste the real profile URLs here; icons link to them automatically.
  social: { instagram: "", facebook: "", linkedin: "" },
};

export const whatsappHref = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}`
  : "#";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/properties", label: "Properties" },
  { href: "/developers", label: "Developers" },
  { href: "/why-dubai", label: "Why Dubai?" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact Us" },
];

export const footerLegal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/investment-disclaimer", label: "Investment Disclaimer" },
];

export const developerImage = (slug) => `/images/developers/${slug}.jpg`;

export const developers = [
  { slug: "emaar", name: "Emaar", tagline: "Iconic Communities. Exceptional Addresses.",
    blurb: "Discover thoughtfully planned communities and contemporary residences by Emaar Properties. Explore vibrant urban destinations, premium waterfront addresses and family-focused developments." },
  { slug: "danube", name: "Danube", tagline: "Contemporary Living. Flexible Possibilities.",
    blurb: "Explore residential developments known for contemporary design, lifestyle amenities and project-specific payment structures. Compare unit types and current availability." },
  { slug: "binghatti", name: "Binghatti", tagline: "Architecture That Makes a Statement.",
    blurb: "Explore distinctive modern architecture, contemporary apartments and selected branded residences, with design-led residential experiences." },
  { slug: "damac", name: "DAMAC", tagline: "Luxury Living, Reimagined.",
    blurb: "Explore residential communities and luxury developments featuring distinctive homes, lifestyle amenities and curated community environments." },
  { slug: "imtiaz", name: "Imtiaz", tagline: "Designed for Elevated Everyday Living.",
    blurb: "Discover thoughtfully designed residences where modern interiors, lifestyle amenities and contemporary architecture come together." },
  { slug: "azizi", name: "Azizi", tagline: "Communities Built Around Possibility.",
    blurb: "Explore apartments, waterfront residences and master-planned developments across Dubai’s evolving neighborhoods." },
];

// 18 proposed launch listings (3 per developer). PLACEHOLDERS: not real stock.
// Fill in verified values (startingPrice as a number in AED) and set lastVerified.
export const properties = developers.flatMap((d) =>
  [1, 2, 3].map((n) => ({
    slug: `${d.slug}-project-${n}`,
    image: `/images/properties/${d.slug}-project-${n}.jpg`,
    name: `${d.name} Project ${n}`,
    developer: d.name,
    developerSlug: d.slug,
    location: "To be confirmed",
    type: "To be confirmed",
    bedrooms: "To be confirmed",
    status: "To be confirmed",
    handover: "To be confirmed",
    startingPrice: null,
    lastVerified: null,
    overview: "",
    amenities: [],
    paymentPlan: "",
  }))
);

export const categories = [
  { title: "New Launches", text: "Recently introduced residential developments." },
  { title: "Off-Plan Properties", text: "Properties sold before completion, with project-specific payment arrangements." },
  { title: "Luxury Residences", text: "Premium homes with distinctive architecture, locations and amenities." },
];

export function formatPrice(p) {
  return p.startingPrice
    ? `AED ${new Intl.NumberFormat("en-US").format(p.startingPrice)}`
    : "Price on request";
}

export const faqs = [
  ["Can Pakistani citizens buy property in Dubai?", "Generally yes, in designated areas and subject to current UAE ownership and transaction rules."],
  ["Can I explore properties without travelling?", "Yes, initial research and consultation can be remote. Fully remote completion depends on the transaction and required documents."],
  ["What is the minimum investment?", "There is no single minimum price for all projects. The amount varies by property and includes additional costs."],
  ["What is an off-plan property?", "It is sold before construction is complete, often with projected handover dates and scheduled payments."],
  ["Are installment plans available?", "Many developments offer them. Terms and payment schedules vary by project and must be checked."],
  ["Can I earn rental income?", "Rental income is possible but depends on demand, expenses, vacancy and market conditions."],
  ["Does property ownership qualify for a UAE Golden Visa?", "Some qualifying property investments may support eligibility, subject to current regulations and official approval."],
  ["What additional costs apply?", "Government fees, service charges, agency fees where applicable, financing, upkeep and related expenses may apply."],
  ["Can I transfer payment from Pakistan?", "Payments must follow applicable Pakistani banking and foreign-exchange regulations; confirm the permitted route with a qualified institution."],
  ["Which developers are featured?", "Emaar, Danube, Binghatti, DAMAC, Imtiaz and Azizi, subject to confirmed project inventory."],
  ["Does Dalera guarantee returns?", "No. Property investment involves risk, and values, rents and completion schedules may change."],
  ["How do I get started?", "Share your goals and preferred budget, then arrange a consultation to review suitable options."],
];

export const services = [
  ["Property Investment Consultation", "We begin by understanding your goals, preferences and budget to identify relevant real estate opportunities."],
  ["Property Discovery & Selection", "Explore residential developments based on developer, location, unit type and personal requirements."],
  ["Off-Plan Project Guidance", "Review construction schedules, amenities, available unit options and developer installment plans."],
  ["Project Comparisons", "Compare price, location, ownership costs, amenities, payment plans and estimated handover dates."],
  ["Purchase Process Guidance", "Understand the general documentation and steps involved in progressing with a selected developer."],
  ["Remote Consultations", "Discuss project options by WhatsApp or online meeting from Pakistan."],
];
