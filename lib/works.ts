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
  photoPosition?: string;
  gallery?: { src: string; alt: string }[];
}

export const works: Work[] = [
  {
    slug: "whitefield-individual-house",
    ref: "W01",
    sample: false,
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
    slug: "dharmavaram-palli-residence",
    ref: "W02",
    sample: false,
    name: "Dharmavaram Palli residence",
    location: "Dharmavaram Palli, Punganur, Andhra Pradesh",
    locality: "Punganur",
    category: "Residential",
    type: "villa",
    floors: 2,
    bays: 4,
    status: "Completed",
    year: "2024",
    area: "3,300 sq.ft",
    config: "G+1",
    scope: "Turnkey — design to handover",
    duration: "—",
    structure: "RCC framed",
    note: "A 3,300 sq.ft G+1 residence at Dharmavaram Palli, Punganur, completed in 2024, with a stainless-steel balcony railing, arched timber-framed entrance and a double-height living hall.",
    detail: [
      "A two-storey (G+1) independent house of 3,300 sq.ft, completed in 2024 at Dharmavaram Palli, Punganur.",
      "The front elevation has a cantilevered first-floor balcony with a stainless-steel and glass railing, a side staircase, and a panelled compound wall with lit recesses.",
      "Inside, the entrance opens to a double-height living hall with a steel-railed staircase, polished vitrified flooring and a built-in TV and display unit.",
    ],
    photo: "/images/dharmavaram-front-md.webp",
    photoPosition: "50% 0%",
    gallery: [
      { src: "/images/dharmavaram-dusk-front.webp", alt: "Dharmavaram Palli house front elevation lit up at night" },
      { src: "/images/dharmavaram-night-front.webp", alt: "Front elevation with balcony and compound wall at night" },
      { src: "/images/dharmavaram-side-celebration.webp", alt: "Side view of the house on the day of the housewarming" },
      { src: "/images/dharmavaram-entrance.webp", alt: "Arched timber-framed entrance with granite steps" },
      { src: "/images/dharmavaram-interior.webp", alt: "Double-height living hall with staircase" },
    ],
  },
  {
    slug: "aara-villa",
    ref: "W03",
    sample: false,
    name: "Aara Villa",
    location: "Dharmavaram Palli, Punganur, Andhra Pradesh",
    locality: "Punganur",
    category: "Residential",
    type: "villa",
    floors: 2,
    bays: 4,
    status: "Ongoing",
    year: "2026",
    area: "—",
    config: "Duplex",
    scope: "Turnkey — design to handover",
    duration: "In progress",
    structure: "RCC framed",
    note: "A duplex villa under construction at Dharmavaram Palli, Punganur, Andhra Pradesh.",
    detail: [
      "Aara Villa is a duplex villa on a plot at Dharmavaram Palli, Punganur, and is currently under construction.",
      "Photographs shown are general construction images; actual progress photographs of Aara Villa will replace them as the work moves forward.",
    ],
    photo: "/images/rebar-columns-md.webp",
    gallery: [
      { src: "/images/slab-team.webp", alt: "Crew casting a slab on site" },
      { src: "/images/frame-floors.webp", alt: "RCC frame rising floor by floor" },
      { src: "/images/rebar-overhead.webp", alt: "Slab reinforcement ready for the pour" },
    ],
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
