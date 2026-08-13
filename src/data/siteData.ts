import heroImg from '../assets/images/hero_architecture_1786623145400.jpg';
import introLeftImg from '../assets/images/intro_left_house_1786623174416.jpg';
import introRightImg from '../assets/images/intro_right_house_1786623227176.jpg';
import kitchenImg from '../assets/images/featured_kitchen_1786623251287.jpg';
import recentVillaImg from '../assets/images/recent_work_villa_1786623662661.jpg';
import recentInteriorImg from '../assets/images/recent_interior_suite_1786623675888.jpg';
import recentCantileverImg from '../assets/images/recent_cantilever_house_1786623686422.jpg';
import recentBathroomImg from '../assets/images/recent_bathroom_suite_1786623697005.jpg';
import { InclusionDetail, NavigationItem, ProjectDesign, RecentWorkItem, GoogleReview } from '../types';

export const siteConfig = {
  brandName: 'RealestateRoyal',
  brandSubtitle: 'Architectural Construction Studio',
  hero: {
    eyebrow: "Crafting Tomorrow's Living Spaces.",
    headlinePart1: "Set New Standards",
    headlinePart2: "in ",
    headlineItalic: "Modern",
    headlinePart3: " Home",
    headlinePart4: "Construction",
    imageUrl: heroImg,
  },
  introduction: {
    sparkleSymbol: "✦",
    titlePart1: "If you can ",
    titleItalic1: "dream it",
    titlePart2: ", we",
    titleLine2: "can ",
    titleItalic2: "build it.",
    paragraph: "We adopt a uniquely personalised perspective on each project to deliver stunning spaces of optimal function. Renowned for our architectural understanding and masterful craftsmanship, our portfolio of residential projects...",
    ctaText: "Request a Quote",
    leftImageUrl: introLeftImg,
    rightImageUrl: introRightImg,
  },
  inclusions: {
    titlePart1: "Our timeless ",
    titleItalic: "inclusions & services",
    paragraph: "We've been creating dream homes our clients are thrilled to call their own. Delighting them with hand-picked finishes, accessories and accents.",
    ctaText: "View Services",
    imageUrl: kitchenImg,
  }
};

export const navItems: NavigationItem[] = [
  { label: 'House Design', href: '#house-design', modalKey: 'house-design' },
  { label: 'Services', href: '#inclusions', modalKey: 'inclusions' },
  { label: 'About', href: '#about', modalKey: 'about' },
  { label: 'FAQ', href: '#faq', modalKey: 'faq' },
];

export const faqList = [
  {
    id: 'faq-1',
    category: 'Construction & Timelines',
    question: 'What is the typical construction timeline for a custom luxury residence?',
    answer: 'Our bespoke residential builds generally span between 8 to 14 months from the initial site excavation to final handover. This includes structural concrete pouring, custom joinery fabrication, and rigorous quality assurance checks at every milestone.',
  },
  {
    id: 'faq-2',
    category: 'Contracts & Pricing',
    question: 'Do you offer fixed-price construction contracts?',
    answer: 'Yes. Every project includes a detailed Quantity Surveyor breakdown and a fixed-price master builder contract. This guarantees full cost transparency with zero hidden surprises or unapproved budget variations.',
  },
  {
    id: 'faq-3',
    category: 'Virtual Consultations',
    question: 'How do I schedule a virtual architectural consultation via Google Meet or Zoom?',
    answer: 'You can request a 1-on-1 virtual design session using our online booking system or chatbot concierge. We offer direct video appointments via Google Meet, Zoom, or Calendly, complete with live screen sharing of 3D floorplans and material swatches.',
  },
  {
    id: 'faq-4',
    category: 'Customization & Inclusions',
    question: 'Can we customize interior finishes, marble slabs, and joinery packages?',
    answer: 'Absoluted. Our in-house interior architecture team works closely with you during the specification phase to select custom natural stone slabs, European timber floors, Gaggenau/Miele appliance suites, and bespoke lighting.',
  },
  {
    id: 'faq-5',
    category: 'Warranties & Guarantees',
    question: 'What warranties and guarantees come with a RealestateRoyal build?',
    answer: 'All our builds are backed by an official 10-Year Structural Builder Guarantee, Master Builders Victoria certification, and comprehensive post-handover maintenance support during the first 12 months.',
  },
  {
    id: 'faq-6',
    category: 'Locations & Feasibility',
    question: 'Which locations and council areas do you construct in?',
    answer: 'We construct premium homes across metropolitan Victoria (Toorak, Brighton, South Yarra, Mornington Peninsula) and New South Wales (Sydney Eastern Suburbs, North Shore, Byron Bay). We also handle full council planning permits and site orientation analysis.',
  },
];

export const inclusionList: InclusionDetail[] = [
  {
    id: 'inc-1',
    category: 'Interior Joinery & Kitchens',
    title: 'Calacatta & Verde Marble Surfaces',
    description: 'Precision-cut honed natural marble countertops, slab splashbacks, and integrated flush-mounted appliances.',
    specs: ['20mm solid stone edges with mitred waterfall ends', 'Custom soft-close matte lacquer cabinetry', 'Concealed LED strip task lighting'],
    imageUrl: kitchenImg,
  },
  {
    id: 'inc-2',
    category: 'Architectural Glazing',
    title: 'Floor-to-Ceiling Thermal Cavity Windows',
    description: 'Minimalist slimline aluminum framing with double-glazed low-E acoustic glass for seamless indoor-outdoor transitions.',
    specs: ['Sub-floor recessed threshold tracks', 'Thermal break technology', 'Automated motorized blind recesses'],
    imageUrl: introRightImg,
  },
  {
    id: 'inc-3',
    category: 'Façade & Cladding',
    title: 'Architectural Battening & Cladding Systems',
    description: 'Sustainably sourced Japanese scorched timber (Shou Sugi Ban) and textured architectural masonry facades.',
    specs: ['Rainscreen ventilated facade assembly', 'Concealed fixing structural alignment', 'UV and weather resistant sealants'],
    imageUrl: introLeftImg,
  },
  {
    id: 'inc-4',
    category: 'Climate & Acoustics',
    title: 'Hydronic Underfloor & Ducted Climate',
    description: 'Multi-zone silent hydronic heating paired with architectural minimalist slot linear diffusers.',
    specs: ['Smart app-controlled zone thermostats', 'Acoustic attenuation insulation (R6.0 ratings)', 'Clean air filtration systems'],
    imageUrl: heroImg,
  }
];

export const projectDesigns: ProjectDesign[] = [
  {
    id: 'prj-1',
    title: 'The Monolith Residence',
    category: 'Custom Modern Villa',
    area: '620 sqm',
    location: 'Toorak, VIC',
    description: 'A striking contemporary composition balancing cantilevered concrete forms with floor-to-ceiling glass pavilions.',
    imageUrl: heroImg,
    features: ['Double-height atrium', 'Infinity lap pool', 'Subterranean 4-car gallery', 'Integrated solar skin'],
  },
  {
    id: 'prj-2',
    title: 'Verdant Pavilion',
    category: 'Coastal Architectural Home',
    area: '480 sqm',
    location: 'Byron Bay, NSW',
    description: 'Warm timber battens and textured natural limestone create a serene sanctuary harmonized with coastal flora.',
    imageUrl: introLeftImg,
    features: ['Shou Sugi Ban timber facade', 'Indoor outdoor courtyard', 'Off-grid rainwater system', 'Custom wine cellar'],
  },
  {
    id: 'prj-3',
    title: 'Residence No. 8',
    category: 'Luxury Urban Residence',
    area: '540 sqm',
    location: 'South Yarra, VIC',
    description: 'Refined urban luxury featuring dark green marble, custom metalwork screens, and private rooftop gardens.',
    imageUrl: introRightImg,
    features: ['Custom brass joinery details', 'Rooftop dining loggia', 'Private wellness suite', 'Acoustic glass envelope'],
  }
];

export const recentWorkItems: RecentWorkItem[] = [
  {
    id: 'rw-1',
    title: 'The Glass Pavilion Residence',
    subtitle: 'Off-form concrete, slimline thermal glazing, and cantilevered living wings.',
    category: 'Custom Residences',
    location: 'Toorak, VIC',
    scope: 'Full Structural Build & Glazing',
    year: '2026',
    imageUrl: recentVillaImg,
    spanClass: 'md:col-span-8 md:row-span-2',
    aspectRatio: 'h-[320px] md:h-[460px]',
  },
  {
    id: 'rw-2',
    title: 'Sanctuary Master Suite',
    subtitle: 'Smoked European oak joinery with acoustic timber ceiling battening.',
    category: 'Interior Architecture',
    location: 'Brighton, VIC',
    scope: 'Interior Architecture & Joinery',
    year: '2025',
    imageUrl: recentInteriorImg,
    spanClass: 'md:col-span-4 md:row-span-1',
    aspectRatio: 'h-[240px] md:h-[220px]',
  },
  {
    id: 'rw-3',
    title: 'The Cantilever Villa',
    subtitle: 'Textured architectural masonry, floating concrete slabs, and infinity pool loggia.',
    category: 'Custom Residences',
    location: 'South Yarra, VIC',
    scope: 'Full Turnkey Construction',
    year: '2025',
    imageUrl: recentCantileverImg,
    spanClass: 'md:col-span-4 md:row-span-1',
    aspectRatio: 'h-[240px] md:h-[220px]',
  },
  {
    id: 'rw-4',
    title: 'Calacatta Marble Spa Suite',
    subtitle: 'Hand-honed natural marble, integrated lightwell, and concealed brass hardware.',
    category: 'Bespoke Inclusions',
    location: 'Mosman, NSW',
    scope: 'High-End Stone & Bath Suite',
    year: '2026',
    imageUrl: recentBathroomImg,
    spanClass: 'md:col-span-12',
    aspectRatio: 'h-[260px] md:h-[320px]',
  },
];

export const googleReviews: GoogleReview[] = [
  {
    id: 'gr-1',
    authorName: 'Marcus & Julianne Vance',
    authorLocation: 'Toorak, VIC',
    rating: 5,
    timeAgo: '3 weeks ago',
    projectBuilt: 'Custom Architectural Residence (620 sqm)',
    reviewText: 'RealestateRoyal delivered a masterclass in luxury construction. From structural steel alignment to the hand-honed marble joinery, the precision was astounding. Our build finished on budget and two weeks ahead of schedule. Truly top-tier architectural builders.',
    verified: true,
  },
  {
    id: 'gr-2',
    authorName: 'Dr. Arthur Sterling',
    authorLocation: 'Brighton, VIC',
    rating: 5,
    timeAgo: '1 month ago',
    projectBuilt: 'Coastal Modern Villa',
    reviewText: 'Building an architecturally complex home with floor-to-ceiling glass and Shou Sugi Ban cladding requires immense skill. RealestateRoyal’s site manager was on site every day and communication was flawless. A seamless 5-star experience.',
    verified: true,
  },
  {
    id: 'gr-3',
    authorName: 'Sienna Ross-Clair',
    authorLocation: 'South Yarra, VIC',
    rating: 5,
    timeAgo: '2 months ago',
    projectBuilt: 'Urban Luxury Residence & Renovation',
    reviewText: 'The quality of inclusions and craftsmanship sets RealestateRoyal completely apart. Their team handled council permits, structural engineering, and interior finishes without us having to stress once.',
    verified: true,
  },
  {
    id: 'gr-4',
    authorName: 'David & Evelyn Croft',
    authorLocation: 'Byron Bay, NSW',
    rating: 5,
    timeAgo: '3 months ago',
    projectBuilt: 'Hillside Off-Grid Residence',
    reviewText: 'An incredible journey from initial floorplan concept to key handover. The team’s attention to acoustic insulation, climate zoning, and natural light orientation was remarkable. Exceptional builders.',
    verified: true,
  },
];

