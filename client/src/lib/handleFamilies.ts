export type HandleFamily = {
  slug: string;
  number: string;
  title: string;
  source: string;
  summary: string;
  image: string;
  overview: string;
  applications: string[];
  finishPairing: string;
  signatureForms: string;
  specificationNotes: string;
  consultationTitle: string;
  consultationText: string;
};

export const handleFamilies: HandleFamily[] = [
  {
    slug: "bridge",
    number: "01",
    title: "Bridge Handles",
    source: "Ponte · Ponte Modulari",
    summary:
      "Architectural pull handles with composed proportions and an assured grip profile for kitchens, wardrobes, and bespoke cabinetry.",
    image: "https://cosma.design/images/products/1731921599203_cosma-handle-13063_C.jpg",
    overview:
      "Bridge handles sit at the most recognisable end of the curated EDP offer. They provide a clear grip point, read confidently against timber, lacquer, and painted fronts, and work particularly well where joinery needs a disciplined architectural pull rather than decorative interruption.",
    applications: ["Bespoke kitchens", "Wardrobes", "Utility rooms", "Furniture-grade cabinetry"],
    finishPairing:
      "Bridge formats pair especially well with brushed brass, bronze, smoked steel, and satin nickel where the handle should register as a calm metal line rather than an ornamental accent.",
    signatureForms:
      "Linear pulls, softened returns, modular bridge options, and composed edge geometry designed to feel substantial without visual excess.",
    specificationNotes:
      "Best suited where projects need reliable grip comfort, multiple centre options, and a versatile family that can scale across drawers, doors, and taller elevations.",
    consultationTitle: "Need a bridge-handle edit for your project?",
    consultationText:
      "We can help narrow the bridge range to a cleaner UK-facing shortlist based on cabinetry style, finish direction, and project scale.",
  },
  {
    slug: "integrated",
    number: "02",
    title: "Integrated Handles",
    source: "Presa Chiusa · Integrate",
    summary:
      "Concealed and integrated solutions for cleaner elevations, quieter joinery lines, and more minimal contemporary compositions.",
    image: "https://cosma.design/images/products/1731921599203_cosma-handle-13063_D.jpg",
    overview:
      "Integrated handles are intended for projects where the front elevation should remain calm and uninterrupted. Their value lies in reducing visual noise while still giving the user a tactile and dependable point of contact within contemporary cabinetry and architectural joinery.",
    applications: ["Minimal kitchens", "Handle-light joinery", "Wardrobes", "Architectural storage walls"],
    finishPairing:
      "These families work best in black, smoked steel, satin nickel, and closely matched metallic tones where the hardware becomes part of the door language rather than a separate feature.",
    signatureForms:
      "Recessed profiles, concealed grip channels, integrated edge pulls, and quieter geometries intended to support clean planes and continuous cabinetry lines.",
    specificationNotes:
      "Most effective where designers prioritise flush elevations, reduced projection, and a restrained visual rhythm across long runs of cabinetry.",
    consultationTitle: "Considering a more integrated elevation?",
    consultationText:
      "We can help compare integrated options for kitchens, tall joinery, and contemporary schemes where visual restraint matters as much as usability.",
  },
  {
    slug: "vertical",
    number: "03",
    title: "Vertical Handles",
    source: "Verticali · Verticali Integrate",
    summary:
      "Elegant upright formats for tall cabinetry and pantry runs where rhythm, reach, and alignment matter as much as finish.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Vertical handles bring order to taller elevations. They are especially valuable in pantry walls, integrated storage, and full-height joinery where repetition and alignment become part of the architectural composition of the room.",
    applications: ["Pantry runs", "Tall cabinetry", "Utility walls", "Wardrobe banks"],
    finishPairing:
      "Vertical formats often benefit from black, bronze, brushed brass, or steel finishes depending on whether the project calls for sharper contrast or a warmer metal rhythm.",
    signatureForms:
      "Upright pulls, extended grip lines, integrated vertical formats, and proportion-led hardware intended to reinforce cadence across tall doors.",
    specificationNotes:
      "Particularly useful where the joinery composition relies on consistent spacing, longer visual lines, and a more deliberate relationship between hand position and door scale.",
    consultationTitle: "Planning tall cabinetry or pantry walls?",
    consultationText:
      "We can advise on vertical handle families that suit alignment-sensitive projects and help keep longer elevations visually composed.",
  },
  {
    slug: "appliance",
    number: "04",
    title: "Appliance Handles",
    source: "Elettrodomestici",
    summary:
      "Purpose-led hardware for integrated appliances and larger frontages where balance, strength, and finish integrity are essential.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Appliance handles serve a more technical role within the collection. They need to manage larger loads, frequent use, and wider frontages while still sitting comfortably within the same material and design language as the rest of the project.",
    applications: ["Integrated refrigeration", "Dishwashers", "Larder appliances", "Large-format cabinetry"],
    finishPairing:
      "These pieces typically work best in durable and composed finishes such as stainless-toned options, black, satin nickel, and selected brass programmes where consistency with adjacent joinery is required.",
    signatureForms:
      "Purpose-led grips, larger pulls, stronger sections, and practical geometries selected for leverage, comfort, and visual balance on broad fronts.",
    specificationNotes:
      "Best specified where the project needs stronger fixing confidence, reliable grip depth, and a deliberate relationship between appliance fronts and surrounding cabinet handles.",
    consultationTitle: "Need appliance-ready handle options?",
    consultationText:
      "We can help identify suitable families for integrated appliances and larger doors where proportion, strength, and finish continuity all matter.",
  },
  {
    slug: "knobs",
    number: "05",
    title: "Knobs & Small Hardware",
    source: "Pomoli",
    summary:
      "Compact tactile pieces that add a jewellery-like final note to furniture, dressers, and carefully detailed cabinet fronts.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Knobs and smaller hardware elements allow the project to shift in tone. They can feel more intimate, more decorative, or more furniture-led, depending on form and finish, while still fitting inside the wider EDP language of restraint and material confidence.",
    applications: ["Furniture pieces", "Vanities", "Secondary cabinetry", "Dressers and sideboards"],
    finishPairing:
      "These pieces can be especially effective in brushed brass, bronze, black, and mixed-metal directions where the hardware is intended to read as a smaller accent with tactile presence.",
    signatureForms:
      "Knobs, compact pulls, tactile small-format pieces, and jewellery-like details chosen for projects that need a quieter but more intimate point of contact.",
    specificationNotes:
      "Most useful where the project scale is smaller, the furniture influence is stronger, or a compact decorative note is preferred over longer architectural pulls.",
    consultationTitle: "Looking for smaller-format hardware?",
    consultationText:
      "We can prepare a tighter selection of knobs and compact hardware for furniture-led interiors, vanities, and secondary joinery details.",
  },
  {
    slug: "special-designs",
    number: "06",
    title: "Special Designs",
    source: "Speciali",
    summary:
      "More sculptural, individual forms selected for design-led interiors that need a stronger hardware signature without losing restraint.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Special designs represent the more expressive edge of the curated offer. They are better suited to edited specification than volume browsing, because their role is often to create a stronger signature moment within an otherwise restrained interior.",
    applications: ["Statement kitchens", "Boutique interiors", "Design-led joinery", "Hospitality accents"],
    finishPairing:
      "These ranges often benefit from warmer metallic tones, deeper bronzes, blackened finishes, and other finish directions where form and material can work together as a focal point.",
    signatureForms:
      "Sculptural pulls, less conventional profiles, expressive proportions, and more individual forms intended for projects that want stronger identity without abandoning control.",
    specificationNotes:
      "Best used as a curated highlight family where the brief supports a more distinctive hardware language and the handle is expected to contribute actively to the room character.",
    consultationTitle: "Exploring a more distinctive hardware language?",
    consultationText:
      "We can help identify special-design options that feel directional and premium while still staying aligned with the wider EDP showroom aesthetic.",
  },
];

export const handleFinishes = [
  {
    name: "Brushed Brass",
    note: "Warm, softened highlights for interiors that favour depth and quiet contrast.",
  },
  {
    name: "Smoked Steel",
    note: "A refined graphite-metal tone suited to restrained, contemporary schemes.",
  },
  {
    name: "Matte Black",
    note: "A sharp architectural finish for cabinetry, internal doors, and minimal detailing.",
  },
  {
    name: "Satin Nickel",
    note: "Subtle reflectivity with a clean technical edge for versatile specification work.",
  },
];

export const handleApplications = [
  "Private residences",
  "Bespoke kitchens",
  "Architectural joinery",
  "Interior refurbishment",
];
