// ONE FILE FOR ALL PROJECTS. One block { ... } = one project page.
// Add a project: copy a whole block, paste it below, give it a NEW slug.
// Remove a project: delete its whole block.

export const projects = [
  /* ================= EMAAR ================= */
  {
    slug: "emaar-valia",
    developerSlug: "emaar",
    name: "Valia at Dubai Creek Harbour",
    location: "Dubai Creek Harbour",
  },

  /* ================= DANUBE ================= */
  {
    slug: "danube-shahrukhz-residences",
    developerSlug: "danube",
    name: "Shahrukhz Residences",
    location: "Dubai Maritime City",

    startingPrice: 1650000, // numbers only, no commas
    handover: "Q4 2029", // keep the "Q4 2029" format
    paymentSummary: "30/70",
    paymentPlan: "30% during construction, 70% on handover.",
    paymentSteps: [
      // should add up to 100%
      { label: "On booking", value: "10%", note: "Optional small note" },
      { label: "During construction", value: "20%" },
      { label: "On handover", value: "70%" },
    ],
    mapUrl: "", // leave empty: the map finds the project by name
    brochure: "", // later: "/brochures/shahrukhz.pdf"
    floorPlan: "", // later: "/floorplans/shahrukhz.pdf"
    lastVerified: "17 Nov 2026",
  },

  /* ================= BINGHATTI ================= */
  {
    slug: "binghatti-starfall",
    developerSlug: "binghatti",
    name: "Binghatti Starfall",
  },

  /* ================= DAMAC ================= */
  {
    slug: "damac-islands-2",
    developerSlug: "damac",
    name: "DAMAC Islands 2",
    location: "DAMAC Islands 2 community",
  },

  /* ================= IMTIAZ ================= */
  {
    slug: "imtiaz-kore",
    developerSlug: "imtiaz",
    name: "Kore by Imtiaz", // please confirm the real project name
  },

  /* ================= AZIZI ================= */
  {
    slug: "azizi-lina",
    developerSlug: "azizi",
    name: "Azizi Lina",
    location: "Downtown Jebel Ali",
  },
];