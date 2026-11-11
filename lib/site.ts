/* ============================================================
   Constructive Vision — firm identity.
   EDIT THIS FILE FIRST. Every value marked TODO is a placeholder.
   ============================================================ */

export const site = {
  name: "Constructive Vision",
  legal: "Constructive Visions LLP", // TODO registered legal name not confirmed yet
  short: "Constructive Vision",
  tagline: "Civil engineering & construction",

  /** Used for canonical URLs, sitemap and structured data. */
  url: "https://constructivevisions.com", // TODO domain not confirmed yet

  founded: "2026",

  /* Main call line and WhatsApp: Janardhan (then Tejeswar, then Chaithanya).
     TODO replace the address and GST. */
  phone: "+91 99897 35889",
  whatsapp: "919989735889", // digits only, country code first
  email: "hello@constructivevisions.com", // TODO depends on the confirmed domain
  street: "Door No. 0-00, Main Road",
  gst: "GSTIN — to be issued",

  city: "Tirupati",
  state: "Andhra Pradesh",
  postal: "517501",
  country: "IN",

  /* Approximate co-ordinates of the office. Google uses these for local
     search, so replace them with the real ones from Google Maps. */
  geo: { lat: 13.6288, lng: 79.4192 },

  region: "Andhra Pradesh & Karnataka",
  areaServed: [
    "Tirupati",
    "Chittoor",
    "Nellore",
    "Kadapa",
    "Anantapur",
    "Kurnool",
    "Vijayawada",
    "Bengaluru",
    "Bengaluru Rural",
    "Kolar",
    "Mysuru",
  ],

  /* Shown on the home page, grouped by state. Keep in step with areaServed. */
  areaGroups: [
    { state: "Andhra Pradesh", places: ["Tirupati", "Chittoor", "Nellore", "Kadapa", "Anantapur", "Kurnool", "Vijayawada"] },
    { state: "Karnataka", places: ["Bengaluru", "Bengaluru Rural", "Kolar", "Mysuru"] },
  ],

  hours: "Mo-Sa 09:00-19:00",

  revision: "A",
  revNote: "Draft for approval — contact details and project records pending",
} as const;

export const founders = [
  {
    no: "01",
    name: "Janardhan Reddy",
    phone: "+91 99897 35889",
    role: "Founder — Planning & Estimation",
    vertex: "Cost & schedule",
    bio: "Prepares the bill of quantities, rate analysis and programme. Tracks stage-wise billing against work actually completed, so the cost never drifts quietly.",
  },
  {
    no: "02",
    name: "Tejeswar Reddy",
    phone: "+91 93929 97712",
    role: "Founder — Projects & Execution",
    vertex: "Site & execution",
    bio: "Owns the site. Labour, materials, sequencing and quality checks at every stage from excavation through handover, with a weekly photo record for the client.",
  },
  {
    no: "03",
    name: "Chaithanya Reddy",
    phone: "+91 93813 74502",
    role: "Founder — Client & Design",
    vertex: "Client & design",
    bio: "Runs client relationships, design coordination and commercial terms. Every drawing set and every agreement is signed off here before work starts on site.",
  },
] as const;

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const telLink = (phone: string = site.phone) => `tel:${phone.replace(/[^+\d]/g, "")}`;
