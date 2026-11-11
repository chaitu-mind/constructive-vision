/* ============================================================
   Cost model for the estimator.

   ⚠ REPLACE EVERY RATE BELOW WITH YOUR OWN BEFORE PUBLISHING.
   These are indicative Andhra Pradesh bands (Bengaluru typically runs
   10–15% higher) and you will be held to
   whatever this page prints. The structure is what matters; the
   numbers are yours to set.
   ============================================================ */

export interface Package {
  id: "essential" | "standard" | "premium";
  name: string;
  blurb: string;
  low: number;   // ₹ per sq.ft of built-up area
  high: number;
  marks: string[];
  /** What is included, item by item, grouped by trade. */
  inclusions: { group: string; items: string[] }[];
}

const structure = {
  group: "Structure",
  items: [
    "Excavation, PCC bed, isolated or raft footings as per structural design",
    "RCC columns, beams, slabs and staircase in M20 concrete",
    "Fe 500D or FE 550D TMT steel from a primary-producer brand, with mill test certificates",
    "Cube tests for every pour and a photo record of reinforcement before casting",
  ],
};
const masonry = (extra: string) => ({
  group: "Masonry & plaster",
  items: [
    "Solid or AAC block masonry, 9 in external and 4.5 in internal walls",
    "12 mm internal and 20 mm external cement plaster, ceilings finished smooth",
    "Minimal exterior elevation: plain plastered facade with simple bands and sill and lintel projections",
    extra,
  ],
});

export const packages: Package[] = [
  {
    id: "essential", name: "Essential", low: 1750, high: 1950,
    blurb: "A sound structure with honest, hard-wearing finishes. Nothing cut from what holds the building up.",
    marks: ["M20 concrete", "Fe 500D or FE 550D TMT", "Vitrified flooring 600×600", "Flush internal doors", "Modular switches"],
    inclusions: [
      structure,
      masonry("Plastering curing for a minimum of 7 days"),
      { group: "Flooring & tiling", items: [
        "Vitrified tiles 600×600 in living, dining and bedrooms",
        "Anti-skid tiles in bathrooms and balcony, wall tiles to 7 ft in bathrooms and 4 ft above kitchen platform",
        "Granite kitchen platform with stainless steel sink",
        "Tile skirting throughout",
      ]},
      { group: "Doors & windows", items: [
        "Main door: engineered or hardwood frame with flush shutter, 1 lock set",
        "Internal doors: flush shutters on hardwood or sal frames",
        "Windows: powder-coated aluminium sliding, with grills and mosquito mesh",
        "Bathroom doors: waterproof PVC or FRP",
      ]},
      { group: "Electrical", items: [
        "Concealed fire-retardant copper wiring in conduits",
        "Modular switches and sockets, MCB distribution board with ELCB",
        "Basic light, fan and AC points in every room, TV and internet conduits in living room",
        "Fixtures such as light fittings and fans are not included",
      ]},
      { group: "Plumbing & sanitary", items: [
        "CPVC or UPVC concealed water supply, PVC drainage",
        "Standard white sanitary ware, one EWC and washbasin per bathroom",
        "Standard CP fittings, 1 shower and 2 taps per bathroom",
        "Overhead tank and sump to standard capacity",
      ]},
      { group: "Painting", items: [
        "Putty, primer and 2 coats of acrylic emulsion inside",
        "Exterior weather-proof emulsion, 2 coats over primer",
        "Enamel on grills and railings",
      ]},
      { group: "Waterproofing & finishing", items: [
        "Terrace, bathrooms and sunk slabs waterproofed",
        "MS railings for staircase and balcony",
        "Final cleaning before handover",
      ]},
    ],
  },
  {
    id: "standard", name: "Standard", low: 2000, high: 2300,
    blurb: "What most owners choose. Better fittings and joinery on the same structural specification.",
    marks: ["M20 concrete", "Fe 500D or FE 550D TMT", "Vitrified flooring 800×800", "Teak main door", "UPVC windows", "Branded CP fittings"],
    inclusions: [
      structure,
      masonry("Plastering curing for a minimum of 7 days"),
      { group: "Flooring & tiling", items: [
        "Vitrified tiles 800×800 in living, dining and bedrooms",
        "Anti-skid tiles in bathrooms and balcony, wall tiles to 7 ft in bathrooms and 4 ft above kitchen platform",
        "Granite kitchen platform with stainless steel sink",
        "Tile skirting throughout",
      ]},
      { group: "Doors & windows", items: [
        "Main door: teak frame and teak-veneered or panelled shutter, with a branded lock set",
        "Internal doors: flush shutters on hardwood or sal frames",
        "Windows: UPVC sliding or casement with glass, grills and mosquito mesh",
        "Bathroom doors: waterproof PVC or FRP",
      ]},
      { group: "Electrical", items: [
        "Concealed fire-retardant copper wiring in conduits",
        "Modular switches and sockets, MCB distribution board with ELCB",
        "Basic light, fan and AC points in every room, TV and internet conduits in living room",
        "Fixtures such as light fittings and fans are not included",
        "Geyser points in all bathrooms, and a separate circuit for each AC",
      ]},
      { group: "Plumbing & sanitary", items: [
        "CPVC or UPVC concealed water supply, PVC drainage",
        "Branded sanitary ware, wall-hung or floor-mounted EWC and washbasin per bathroom",
        "Branded CP fittings, with shower, health faucet and 2 taps per bathroom",
        "Overhead tank and sump to standard capacity",
      ]},
      { group: "Painting", items: [
        "Putty, primer and 2 coats of premium acrylic emulsion inside",
        "Exterior weather-proof emulsion, 2 coats over primer",
        "Enamel on grills and railings",
      ]},
      { group: "Waterproofing & finishing", items: [
        "Terrace, bathrooms and sunk slabs waterproofed",
        "MS railings for staircase and balcony",
        "Final cleaning before handover",
      ]},
    ],
  },
  {
    id: "premium", name: "Premium", low: 2400, high: 2900,
    blurb: "Imported and designer finishes, deeper joinery, and a longer finishing programme.",
    marks: ["M20 concrete", "Fe 500D or FE 550D TMT", "Large-format or natural stone", "Teak joinery throughout", "Concealed fittings", "False ceiling across"],
    inclusions: [
      structure,
      masonry("Gypsum or putty-finished walls on request"),
      { group: "Flooring & tiling", items: [
        "Large-format vitrified (1200×600 or larger) or natural stone in living and dining",
        "Wooden-finish or premium tiles in bedrooms",
        "Designer wall tiles in bathrooms to full height, and kitchen backsplash",
        "Granite or quartz kitchen platform, with premium sink",
        "Marble or granite staircase treads",
      ]},
      { group: "Doors & windows", items: [
        "Teak joinery throughout: frames and shutters for main and internal doors",
        "Main door: designer panelled teak with digital or smart lock",
        "Windows: premium UPVC or aluminium with toughened or double glazing, with grills and mesh",
      ]},
      { group: "Electrical", items: [
        "Concealed copper wiring in conduits, with premium modular switches",
        "Extra points, cove and profile light provisions, and a separate circuit for each AC",
        "Structured cabling for internet and CCTV, with an intercom provision",
        "Fixtures such as light fittings and fans are not included",
      ]},
      { group: "Plumbing & sanitary", items: [
        "CPVC concealed supply with premium wall-hung sanitary ware",
        "Concealed cisterns, rain showers and designer CP fittings",
        "Geyser provisions in every bathroom, with a solar-ready terrace line",
        "Overhead tank and sump to standard capacity",
      ]},
      { group: "Painting", items: [
        "Putty, primer and 2 coats of luxury emulsion inside, with a texture or accent wall",
        "Exterior weather-proof emulsion, 2 coats over primer",
        "PU or melamine polish on all wooden joinery",
      ]},
      { group: "Ceilings & finishing", items: [
        "Gypsum false ceiling in living, dining, bedrooms and passage, with cove lighting",
        "Terrace, bathrooms and sunk slabs waterproofed",
        "Glass or stainless steel railings for staircase and balcony",
        "Final cleaning before handover",
      ]},
    ],
  },
];

/** Where the money actually goes on a residential RCC build.
 *  Percentages are of the construction cost, not of the project cost. */
export const costSplit: { stage: string; pct: number; note: string }[] = [
  { stage: "Excavation & foundation", pct: 11, note: "Earthwork, footings, plinth beam, backfill" },
  { stage: "RCC structure", pct: 27, note: "Columns, beams, slabs, staircase. Steel and concrete" },
  { stage: "Masonry & plaster", pct: 11, note: "Block work, internal and external plaster, minimal exterior elevation" },
  { stage: "Flooring & tiling", pct: 9, note: "Living areas, bedrooms, wet areas, skirting" },
  { stage: "Doors & windows", pct: 9, note: "Frames, shutters, glazing, grills, hardware" },
  { stage: "Electrical", pct: 7, note: "Conduits, wiring, boards, points, fixtures" },
  { stage: "Plumbing & sanitary", pct: 7, note: "Supply, drainage, fittings, overhead and sump tanks" },
  { stage: "Painting", pct: 5, note: "Putty, primer, interior emulsion, exterior weather coat" },
  { stage: "Waterproofing & misc", pct: 8, note: "Terrace, sunk slabs, railings, site clearance" },
  { stage: "Supervision & overheads", pct: 6, note: "Site engineer, scaffolding, machinery, testing" },
];

/** Stage-wise billing. You pay against work measured, not a calendar. */
export const paymentSchedule: { at: string; pct: number }[] = [
  { at: "On signing the agreement", pct: 20 },
  { at: "Foundation and plinth complete", pct: 10 },
  { at: "Ground floor slab cast", pct: 15 },
  { at: "Upper slabs cast", pct: 15 },
  { at: "Masonry and plaster complete", pct: 15 },
  { at: "Flooring, doors and windows complete", pct: 12 },
  { at: "Electrical, plumbing and painting complete", pct: 8 },
  { at: "Handover after snag clearance", pct: 5 },
];

/** Stated plainly, because this is where quotes mislead people. */
export const exclusions = [
  "Land cost, registration and stamp duty",
  "Government approval fees, development charges and deposits",
  "Compound wall, gate, landscaping, external paving and elevation work beyond the minimal plain elevation",
  "Borewell, sump beyond standard capacity, and water connection",
  "Lift, solar, air conditioning and home automation",
  "Modular kitchen, wardrobes and loose furniture",
  "GST, charged at the applicable rate on the contract value",
];

/** Typical ground coverage after setbacks, as a share of plot area.
 *  Plot-size dependent because setbacks do not scale with the plot. */
export const coverageFor = (plotSqFt: number) =>
  plotSqFt <= 1350 ? 0.72 : plotSqFt <= 2700 ? 0.66 : plotSqFt <= 5400 ? 0.6 : 0.55;

/** Rough programme, in months, from foundation to handover. */
export const durationMonths = (builtUp: number, floors: number) =>
  Math.max(6, Math.round(5 + builtUp / 1100 + floors * 1.1));
