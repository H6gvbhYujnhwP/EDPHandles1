import { ShieldCheck, Sparkles, SwatchBook, type LucideIcon } from "lucide-react";

export type InternalFittingItem = {
  name: string;
  description: string;
  image: string;
};

export type FeaturePoint = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const internalFittings: InternalFittingItem[] = [
  {
    name: "MIRA System",
    description:
      "A modular wardrobe-organisation system designed around refined aluminium profiles, soft edges, and fast custom assembly.",
    image: "/images/internal-fittings-mira-hero.jpg",
  },
  {
    name: "Hanging Rails",
    description:
      "Minimal wardrobe hanging rails with dedicated side and shelf supports, available with premium covering options.",
    image: "/images/internal-fittings/hanging-rails-correct.jpg",
  },
  {
    name: "Shelf Frames",
    description:
      "Fixed shelf-frame components that create a clean internal architecture for glass or material shelf inserts.",
    image: "/images/internal-fittings/pull-out-frame.jpg",
  },
  {
    name: "Pull-Out Frames",
    description:
      "Flexible pull-out frame assemblies that bring accessible wardrobe storage and a premium engineered feel.",
    image: "/images/internal-fittings/shelf-frame.jpg",
  },
  {
    name: "Drawers",
    description:
      "Straight-cut aluminium drawer construction with optional glass-front detailing for bespoke interior schemes.",
    image: "/images/internal-fittings/drawers-correct.png",
  },
  {
    name: "Trays & Dividers",
    description:
      "Organised internal storage solutions for jewellery, watches, and small accessories, designed to fit the MIRA system.",
    image: "/images/internal-fittings/trays-dividers-correct.png",
  },
  {
    name: "Trouser Holders",
    description:
      "Dedicated trouser-holder profiles with non-slip detailing for tailored wardrobe functionality.",
    image: "/images/internal-fittings/trouser-holders-correct.png",
  },
  {
    name: "Shoe Racks & Accessories",
    description:
      "Shoe-rack profiles and complementary accessory options that complete the internal fittings offer.",
    image: "/images/internal-fittings/shoe-rack-correct.png",
  },
];

export const aboutFeaturePoints: FeaturePoint[] = [
  {
    title: "Exclusive Cosma Distribution",
    text:
      "Exclusive UK agency and distribution support for Cosma Italian handles, giving customers direct access to design-led collections and dependable availability.",
    icon: SwatchBook,
  },
  {
    title: "Technical Guidance",
    text:
      "Experienced staff provide practical product advice for furniture manufacturers, kitchen studios, and associated trade customers across the UK.",
    icon: Sparkles,
  },
  {
    title: "UK Stockholding",
    text:
      "A Southend-based stockholding programme supports responsive fulfilment, continuity, and service for specification-led projects.",
    icon: ShieldCheck,
  },
];

export const companyProfile = {
  companyName: "EDP (UK) Ltd",
  strapline: "Exclusive UK Distributors for Cosma",
  addressLines: ["Unit 1, 40 Comet Way", "Southend on Sea, Essex SS2 6GD"],
  phoneLabel: "Tel. 01702 618877",
  shortIntro:
    "EDP (UK) Ltd is a leading distributor of components supplying high-quality products to the furniture and associated industries within the UK market.",
  aboutLead:
    "With over 28 years of experience, the business focuses on selecting products that combine design distinction, dependable engineering, and commercial practicality for the UK market.",
  aboutBody:
    "Based in Southend-on-Sea, Essex, EDP offers full UK stockholding, professional technical advice, and exclusive access to Cosma Italian handles. Under the direction of Mark Willett, the company continues to develop an innovative range shaped by reliability, product development, and premium European craftsmanship.",
  contactLead:
    "For product guidance, stock enquiries, and trade support, EDP (UK) Ltd offers direct access to premium Italian handle and internal-fittings collections for furniture and associated industries throughout the UK.",
  tradeLead:
    "EDP supports kitchen studios, furniture manufacturers, fit-out specialists, and specification-led partners with practical guidance, dependable stockholding, and design-led product access.",
  directorName: "Mark Willett",
  directorRole: "Director",
};

export const sharedImages = {
  heroKitchen:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-hero-kitchen-brass-LnFBkzRUvbTX7u7dbXRoHv.webp",
  brassDetail:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-heritage-detail-brass-9C2UfHatBAbx2pMkg8sP9q.webp",
  darkShowroom:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-cta-dark-showroom-5xCUtERPZdSioeLcAoTr4h.webp",
};
