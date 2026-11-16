// Central content file. Replace placeholders with client-verified data before launch.

export const site = {
  name: "Addax Properties",
  tagline: "From Your Home to Dubai’s Finest.",
  // CLIENT TO SUPPLY
  phone: "03237907679",
  // email: "[Email]",
  address: "UAE",
  hours: "9AM To 5PM",
  whatsappNumber: "", // digits only, e.g. 923001234567
  // Paste the real profile URLs here; icons link to them automatically.
  social: { instagram: "https://www.instagram.com/addax.properties/", facebook: "https://www.facebook.com/people/Addax-Properties/61596137160883/", linkedin: "https://www.linkedin.com/company/addax-properties/about/" },
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


// for logos
export const developerImage = (slug) => `/images/developers/${slug}.jpg`;

export const developers = [
  {
    slug: "emaar",
    name: "Emaar",
    logo: "/images/developers-logo/emaar.png",
    tagline: "Iconic Communities. Exceptional Addresses.",
    blurb: "Discover thoughtfully planned communities and contemporary residences by Emaar Properties."
  },
  {
    slug: "danube",
    name: "Danube",
    logo: "/images/developers-logo/danube.png",
    tagline: "Contemporary Living. Flexible Possibilities.",
    blurb: "Explore residential developments known for contemporary design, lifestyle amenities and project-specific payment structures."
  },
  {
    slug: "binghatti",
    name: "Binghatti",
    logo: "/images/developers-logo/binghatti.png",
    tagline: "Architecture That Makes a Statement.",
    blurb: "Explore distinctive modern architecture, contemporary apartments and selected branded residences."
  },
  {
    slug: "damac",
    name: "DAMAC",
    logo: "/images/developers-logo/damac.png",
    tagline: "Luxury Living, Reimagined.",
    blurb: "Explore residential communities and luxury developments featuring distinctive homes and lifestyle amenities."
  },
  {
    slug: "imtiaz",
    name: "Imtiaz",
    logo: "/images/developers-logo/imtiaz.png",
    tagline: "Designed for Elevated Everyday Living.",
    blurb: "Discover thoughtfully designed residences with modern interiors and contemporary architecture."
  },
  {
    slug: "azizi",
    name: "Azizi",
    logo: "/images/developers-logo/azizi.png",
    tagline: "Communities Built Around Possibility.",
    blurb: "Explore apartments, waterfront residences and master-planned developments across Dubai."
  },
];


// for cards
export const developerImage_2 = (slug) => `/images/developers/${slug}.png`;

export const developers_2 = [
  {
    slug: "emaar",
    name: "Emaar",
    logo: "/images/developers/emaar.png",
    tagline: "Iconic Communities. Exceptional Addresses.",
    blurb: "Discover thoughtfully planned communities and contemporary residences by Emaar Properties."
  },
  {
    slug: "danube",
    name: "Danube",
    logo: "/images/developers/danube.png",
    tagline: "Contemporary Living. Flexible Possibilities.",
    blurb: "Explore residential developments known for contemporary design, lifestyle amenities and project-specific payment structures."
  },
  {
    slug: "binghatti",
    name: "Binghatti",
    logo: "/images/developers/binghatti.png",
    tagline: "Architecture That Makes a Statement.",
    blurb: "Explore distinctive modern architecture, contemporary apartments and selected branded residences."
  },
  {
    slug: "damac",
    name: "DAMAC",
    logo: "/images/developers/damac.png",
    tagline: "Luxury Living, Reimagined.",
    blurb: "Explore residential communities and luxury developments featuring distinctive homes and lifestyle amenities."
  },
  {
    slug: "imtiaz",
    name: "Imtiaz",
    logo: "/images/developers/imtiaz.png",
    tagline: "Designed for Elevated Everyday Living.",
    blurb: "Discover thoughtfully designed residences with modern interiors and contemporary architecture."
  },
  {
    slug: "azizi",
    name: "Azizi",
    logo: "/images/developers/azizi.png",
    tagline: "Communities Built Around Possibility.",
    blurb: "Explore apartments, waterfront residences and master-planned developments across Dubai."
  },
];

// 18 proposed launch listings (3 per developer). PLACEHOLDERS: not real stock.
// Fill in verified values (startingPrice as a number in AED) and set lastVerified.
// export const properties = developers.flatMap((d) =>
//   [1, 2, 3].map((n) => ({
//     slug: `${d.slug}-project-${n}`,
//     image: `/images/properties/${d.slug}-project-${n}.png`,
//     name: `${d.name} Project ${n}`,
//     developer: d.name,
//     developerSlug: d.slug,
//     location: "To be confirmed",
//     type: "To be confirmed",
//     bedrooms: "To be confirmed",
//     status: "To be confirmed",
//     handover: "To be confirmed",
//     startingPrice: null,
//     lastVerified: null,
//     overview: "",
//     amenities: [],
//     paymentPlan: "",
//   }))
// );




const TBC = "To be confirmed";


export const rows = [
  // 1. EMAAR PROPERTIES
  {
    developerSlug: "emaar",
    developer: "Emaar Properties",
    name: "Valia",
    location: "Dubai Creek Harbour",
    startingPrice: 1960000,
    paymentPlan: "10% booking / 70% construction / 20% handover",
    handover: "Q4 2030",
  },
  {
    developerSlug: "emaar",
    developer: "Emaar Properties",
    name: "Golf Fields",
    location: "Emaar South",
    startingPrice: 1260000,
    paymentPlan: "10% booking / 70% construction / 20% handover",
    handover: "Q3 2030",
  },
  {
    developerSlug: "emaar",
    developer: "Emaar Properties",
    name: "Fior 1",
    location: "Rashid Yachts & Marina",
    startingPrice: 2200000,
    paymentPlan: "10% booking / 70% construction / 20% handover",
    handover: "Q3 2030",
  },

  // 2. DANUBE PROPERTIES
  {
    developerSlug: "danube",
    developer: "Danube Properties",
    name: "Shahrukhz Residences",
    location: "Dubai Maritime City",
    startingPrice: 1650000,
    paymentPlan: "10% booking / 60% construction / 30% handover",
    handover: "Q1 2030",
  },
  {
    developerSlug: "danube",
    developer: "Danube Properties",
    name: "Greenz by Danube",
    location: "Dubai Academic City",
    startingPrice: 3500000,
    paymentPlan: "10% booking / 60% construction / 30% handover",
    handover: "Q4 2029",
  },
  {
    developerSlug: "danube",
    developer: "Danube Properties",
    name: "Serenz by Danube",
    location: "Jumeirah Village Circle",
    startingPrice: 1100000,
    paymentPlan: "10% booking / 60% construction / 30% handover",
    handover: "Q4 2029",
  },

  // 3. BINGHATTI
  {
    developerSlug: "binghatti",
    developer: "Binghatti",
    name: "Binghatti Starfall",
    location: "Al Jaddaf",
    startingPrice: 759999,
    paymentPlan: "20% booking / 50% construction / 30% handover",
    handover: "Q3 2028",
  },
  {
    developerSlug: "binghatti",
    developer: "Binghatti",
    name: "Binghatti Spectre",
    location: "Al Jaddaf",
    startingPrice: 774999,
    paymentPlan: "10% booking / 40% construction / 50% handover",
    handover: "Q4 2028",
  },
  {
    developerSlug: "binghatti",
    developer: "Binghatti",
    name: "Binghatti Wraith",
    location: "Al Jaddaf",
    startingPrice: 799999,
    paymentPlan: "20% booking / 30% construction / 50% handover",
    handover: "Q4 2027",
  },

  // 4. DAMAC PROPERTIES
  {
    developerSlug: "damac",
    developer: "DAMAC Properties",
    name: "DAMAC Islands 2",
    location: "Dubailand",
    startingPrice: 2994000,
    paymentPlan: "20% booking / 55% construction / 25% handover",
    handover: "Q2–Q4 2030",
  },
  {
    developerSlug: "damac",
    developer: "DAMAC Properties",
    name: "DAMAC District",
    location: "DAMAC Hills",
    startingPrice: 1447000,
    paymentPlan: "20% booking / 40% construction / 40% handover",
    handover: "Q3 2029",
  },
  {
    developerSlug: "damac",
    developer: "DAMAC Properties",
    name: "Chelsea Residences",
    location: "Dubai Maritime City",
    startingPrice: 2386000,
    paymentPlan: "5% booking / 55% construction / 40% handover",
    handover: "Q4 2029",
  },

  // 5. IMTIAZ DEVELOPMENTS
  {
    developerSlug: "imtiaz",
    developer: "Imtiaz Developments",
    name: "KORE by Imtiaz",
    location: "Dubai Land Residence Complex",
    startingPrice: 679000,
    paymentPlan: "20% booking / 30% construction / 50% handover",
    handover: "Q4 2028",
  },
  {
    developerSlug: "imtiaz",
    developer: "Imtiaz Developments",
    name: "The Archive by Imtiaz",
    location: "Dubai Land Residence Complex",
    startingPrice: 666000,
    paymentPlan: "20% booking / 30% construction / 50% handover",
    handover: "Q3 2028",
  },
  {
    developerSlug: "imtiaz",
    developer: "Imtiaz Developments",
    name: "RAW District II",
    location: "Downtown Jebel Ali",
    startingPrice: 666000,
    paymentPlan: "20% booking / 30% construction / 50% handover",
    handover: "Q4 2029",
  },

  // 6. AZIZI DEVELOPMENTS
  {
    developerSlug: "azizi",
    developer: "Azizi Developments",
    name: "Azizi Lina",
    location: "Downtown Jebel Ali",
    startingPrice: 572000,
    paymentPlan: "10% booking / 40% construction / 50% handover",
    handover: "Q4 2027",
  },
  {
    developerSlug: "azizi",
    developer: "Azizi Developments",
    name: "Azizi Wares",
    location: "Downtown Jebel Ali",
    startingPrice: 555000,
    paymentPlan: "10% booking / 40% construction / 50% handover",
    handover: "Q1 2028",
  },
  {
    developerSlug: "azizi",
    developer: "Azizi Developments",
    name: "Azizi Creek Views IV",
    location: "Al Jaddaf / Dubai Healthcare City",
    startingPrice: null,
    paymentPlan: "10% booking / 40% construction / 50% handover",
    handover: "Q4 2028",
  },
];


const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");


export const properties = rows.map((p) => {
  const slug = slugify(p.name);

  return {
    ...p,

    // Automatically generated property URL
    slug,

    // Property image
    image: `/images/properties/${slug}.png`,

    // Additional fields used by existing components
    type: TBC,
    bedrooms: TBC,
    status: TBC,

    // Verification and detail page fields
    lastVerified: null,
    overview: "",
    amenities: [],
  };
});






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
  ["Does Addax guarantee returns?", "No. Property investment involves risk, and values, rents and completion schedules may change."],
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
