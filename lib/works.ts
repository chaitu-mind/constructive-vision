/* ============================================================
   The works record.
   Each entry becomes a card on the home page AND its own indexable
   page at /works/<slug>/ — which is what actually wins local search.
   Set `sample: false` once an entry is real; the red stamp disappears.
   ============================================================ */

export type Category = "Residential" | "Commercial" | "Interiors" | "Site works";
export type DrawingType = "villa" | "apartment" | "retail" | "interior" | "site";

export interface Work {
  slug: string;
  ref: string;
  sample: boolean;
  name: string;
  location: string;
  locality: string;
  category: Category;
  type: DrawingType;
  floors: number;
  bays: number;
  status: "Completed" | "Ongoing";
  year: string;
  area: string;
  config: string;
  scope: string;
  duration: string;
  structure: string;
  note: string;
  detail: string[];
  photo: string | null;
  gallery?: { src: string; alt: string }[];
}

export const works: Work[] = [
  {
    slug: "whitefield-individual-house",
    ref: "W01",
    sample: true,
    name: "Whitefield individual house",
    location: "Whitefield, Bengaluru",
    locality: "Whitefield",
    category: "Residential",
    type: "villa",
    floors: 3,
    bays: 4,
    status: "Completed",
    year: "2025",
    area: "3,850 sq.ft",
    config: "G+2",
    scope: "Turnkey — design to handover",
    duration: "11 months",
    structure: "RCC framed, M20, isolated footings",
    note: "Independent three-storey house on a 40×60 site, with cantilevered balconies on the front elevation, a modular kitchen and built-in wardrobes finished by the same team.",
    detail: [
      "A single independent house, not a duplex: three floors on one plot, with balconies cantilevered off the front elevation and a staircase on the side.",
      "The interiors were done in the same contract. The kitchen has a U-shaped layout with a granite counter, tiled backsplash and under-cabinet lighting; the bedrooms have sliding-door wardrobes with a study unit alongside.",
      "Handed over with the as-built drawing set and all material warranties.",
    ],
    photo: "/images/whitefield-house-exterior-md.webp",
    gallery: [
      { src: "/images/whitefield-kitchen.webp", alt: "Modular kitchen with granite counter and tiled backsplash" },
      { src: "/images/whitefield-wardrobe.webp", alt: "Bedroom sliding wardrobe with study unit" },
      { src: "/images/whitefield-gallery.webp", alt: "Exterior, kitchen and bedroom wardrobes, Whitefield house" },
    ],
  },
  {
    slug: "padmavathi-nagar-apartments",
    ref: "W02",
    sample: true,
    name: "Padmavathi Nagar apartments",
    location: "Tirupati, Andhra Pradesh",
    locality: "Tirupati",
    category: "Residential",
    type: "apartment",
    floors: 4,
    bays: 5,
    status: "Ongoing",
    year: "2026",
    area: "11,200 sq.ft",
    config: "G+3, 8 units",
    scope: "Structure + finishes",
    duration: "18 months (in progress)",
    structure: "RCC framed, M20, raft foundation",
    note: "Eight two-bedroom units over stilt parking. A raft foundation was adopted after the soil report returned a safe bearing capacity below 120 kN/m² at the founding level.",
    detail: [
      "Isolated footings were designed first, but the soil investigation returned a safe bearing capacity under 120 kN/m² at 1.8 m depth. The footings would have covered most of the plan area anyway, so the design changed to a raft.",
      "Stilt parking sets the ground floor at 3.6 m clear, with the eight units stacked on three floors above it.",
      "Currently at second floor slab. Progress photographs go to the owners every Saturday.",
    ],
    photo: "/images/tower-cranes-md.webp",
  },
  {
    slug: "anantha-retail-block",
    ref: "W03",
    sample: true,
    name: "Anantha retail block",
    location: "Kurnool, Andhra Pradesh",
    locality: "Kurnool",
    category: "Commercial",
    type: "retail",
    floors: 3,
    bays: 4,
    status: "Completed",
    year: "2025",
    area: "7,400 sq.ft",
    config: "G+2",
    scope: "Shell & core",
    duration: "9 months",
    structure: "RCC framed, M20, 6.0 m clear spans",
    note: "Column-free retail floors at 6.0 m spans with a glazed street elevation, handed over with services rough-in and a shell ready for three independent tenants.",
    detail: [
      "Retail tenants need clear floor plates, so the grid was set at 6.0 m and the beams deepened to 600 mm rather than dropping intermediate columns into the shop floor.",
      "The street elevation is fully glazed between structural bays, with the mullion grid set out to align with the column centres.",
      "Electrical and plumbing were taken to a rough-in stage at each floor, with capped points left for the tenants' own fit-out contractors.",
    ],
    photo: "/images/frame-floors-md.webp",
  },
];

export const categories: (Category | "All")[] = [
  "All",
  "Residential",
  "Commercial",
  "Interiors",
  "Site works",
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);
