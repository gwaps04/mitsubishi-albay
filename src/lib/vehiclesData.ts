// FILE: src/lib/vehiclesData.ts
/**
 * MITSUBISHI MOTORS ALBAY - VEHICLE & ASSET DIRECTORY
 * 
 * 📍 WHERE TO PLACE VEHICLE ALLOCATION & PROMO IMAGES:
 * 
 * You have 2 simple options:
 * 
 * OPTION 1: Place files into the `/public/` folder with these filenames:
 *   - /public/montero.jpg    (Montero Sport Black Series)
 *   - /public/triton.jpg     (All-New Triton Athlete 4x4)
 *   - /public/xpander.jpg    (Mitsubishi Xpander Cross)
 *   - /public/xforce.jpg     (Mitsubishi Xforce SUV)
 *   - /public/mirage.jpg     (Mirage G4 Sedan)
 *   - /public/l300.jpg       (Mitsubishi L300 FB Body)
 * 
 * OPTION 2: Paste direct online image URLs into `imagePlaceholder` in the list below.
 * All cards use automatic aspect-ratio containment and fallback guards.
 */

export interface VehicleUnit {
  id: string;
  name: string;
  variant: string;
  tagline: string;
  category: string;
  imagePlaceholder: string; // <-- SWAP YOUR IMAGE HERE (e.g. '/montero.jpg' or CDN URL)
  fallbackImage: string;
  srp: string;
  promoDP: string;
  monthlyPromo: string;
  seats: string;
  engine: string;
  transmission: string;
  badge?: string;
  keyPerks: string[];
}

export const ALBAY_VEHICLES: VehicleUnit[] = [
  {
    id: 'montero-sport',
    name: 'Montero Sport',
    variant: 'Black Series 4x2 AT',
    tagline: 'Refined 7-seater midsize SUV with bold commanding presence and advanced safety',
    category: 'Midsize SUV',
    imagePlaceholder: '/car1.jpg',
    fallbackImage: 'https://placehold.co/800x500/18181b/ffffff?text=Montero+Sport+Black+Series',
    srp: '₱2,128,000',
    promoDP: '₱98,000 All-In DP',
    monthlyPromo: '₱38,450 / mo (60 mos)',
    seats: '7-Seater',
    engine: '2.4L MIVEC Clean Diesel Turbo',
    transmission: '8-Speed Automatic',
    badge: 'Best Seller',
    keyPerks: [
      'Free 1-Yr Comprehensive Insurance',
      'Free 3-Yr LTO Registration',
      'Free Chattel Mortgage Fee',
      'Forward Collision Mitigation (FCM)',
    ],
  },
  {
    id: 'triton-athlete',
    name: 'All-New Triton',
    variant: 'Athlete 4x4 AT',
    tagline: 'Next-gen rally-bred power with 204PS engineered to conquer tough Bicol terrain',
    category: '4x4 Pickup Truck',
    imagePlaceholder: '/car2.jpg',
    fallbackImage: 'https://placehold.co/800x500/18181b/ffffff?text=All-New+Triton+Athlete+4x4',
    srp: '₱1,909,000',
    promoDP: '₱85,000 All-In DP',
    monthlyPromo: '₱35,120 / mo (60 mos)',
    seats: '5-Seater',
    engine: '2.4L Bi-Turbo Clean Diesel (204 PS)',
    transmission: '6-Speed AT with Super Select 4WD-II',
    badge: 'High Performance',
    keyPerks: [
      'Super Select 4WD-II with 7 Drive Modes',
      'Free Bedliner & Window Tint',
      'Free 1-Year PMS Labor',
      '7 Airbags & Active Yaw Control',
    ],
  },
  {
    id: 'xpander-cross',
    name: 'Xpander Cross',
    variant: '1.5L AT Two-Tone',
    tagline: 'Philippines #1 family 7-seater crossover MPV with 225mm SUV ground clearance',
    category: '7-Seater Crossover MPV',
    imagePlaceholder: '/car3.jpg',
    fallbackImage: 'https://placehold.co/800x500/18181b/ffffff?text=Mitsubishi+Xpander+Cross',
    srp: '₱1,346,000',
    promoDP: '₱48,000 All-In DP',
    monthlyPromo: '₱24,800 / mo (60 mos)',
    seats: '7-Seater',
    engine: '1.5L DOHC 16V MIVEC',
    transmission: '4-Speed AT with Active Yaw Control',
    badge: 'Family Favorite',
    keyPerks: [
      '225mm High Ground Clearance',
      'Active Yaw Control (AYC)',
      'Flexible Fold-Flat 7-Passenger Seats',
      'Wireless Smartphone Charger',
    ],
  },
  {
    id: 'xforce',
    name: 'Mitsubishi Xforce',
    variant: 'Premium 1.5L CVT',
    tagline: 'Dynamic compact 5-seater SUV with Yamaha Dynamic Sound & 4 Drive Modes',
    category: 'Compact SUV',
    imagePlaceholder: '/car4.jpg',
    fallbackImage: 'https://placehold.co/800x500/18181b/ffffff?text=Mitsubishi+Xforce+SUV',
    srp: '₱1,581,000',
    promoDP: '₱68,000 All-In DP',
    monthlyPromo: '₱29,350 / mo (60 mos)',
    seats: '5-Seater',
    engine: '1.5L 4-Cylinder MIVEC',
    transmission: 'CVT with Wet / Gravel / Mud Modes',
    badge: 'New Arrival',
    keyPerks: [
      'Yamaha Dynamic Sound Premium Audio',
      'Wet Drive Mode for Heavy Rain Handling',
      '12.3-inch Smartphone-link Display',
      'Dual-Zone Auto Climate Control',
    ],
  },
  {
    id: 'mirage-g4',
    name: 'Mirage G4',
    variant: 'GLS 1.2L CVT',
    tagline: 'The undisputed fuel-economy champion delivering up to 23 km/L for smart city driving',
    category: 'Subcompact Sedan',
    imagePlaceholder: '/car5.jpg',
    fallbackImage: 'https://placehold.co/800x500/18181b/ffffff?text=Mirage+G4+GLS+Sedan',
    srp: '₱899,000',
    promoDP: '₱28,000 All-In DP',
    monthlyPromo: '₱16,420 / mo (60 mos)',
    seats: '5-Seater',
    engine: '1.2L 12-Valve DOHC MIVEC',
    transmission: 'INVECS-III CVT',
    badge: 'Top Fuel Saver',
    keyPerks: [
      'Up to 23 km/L Exceptional Fuel Economy',
      'Keyless Operation System (KOS)',
      'Spacious 450L Trunk Capacity',
      'Touchscreen Infotainment with Apple CarPlay',
    ],
  },
  {
    id: 'l300-fb',
    name: 'Mitsubishi L300',
    variant: 'FB Body Euro 4 Turbo',
    tagline: 'The trusted workhorse and business partner powering Bicol logistics and commerce',
    category: 'Commercial Vehicle',
    imagePlaceholder: '/car6.jpg',
    fallbackImage: 'https://placehold.co/800x500/18181b/ffffff?text=Mitsubishi+L300+FB+Body',
    srp: '₱1,010,000',
    promoDP: '₱45,000 All-In DP',
    monthlyPromo: '₱18,950 / mo (60 mos)',
    seats: '17-Seater Utility',
    engine: '2.2L Turbocharged Euro 4 Diesel',
    transmission: '5-Speed Manual Heavy Duty',
    badge: 'Business Essential',
    keyPerks: [
      'Proven High Resale Value in PH',
      'Heavy-Duty Reinforced Rear Axle',
      'Low Cost Maintenance & Ubiquitous Parts',
      'Up to 1,215 kg Payload Rating',
    ],
  },
];

/**
 * Dealership & Agent Static Image Assets
 */
export interface HeroSlide {
  id: string;
  image: string; // <-- SWAP YOUR 3 IMAGES HERE
  fallbackImage: string;
  title: string;
  subtitle: string;
  tag: string;
  highlightUnit: string;
}

export const HERO_CAROUSEL_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    // 📸 IMAGE 1: Local file in /public/hero1.jpg
    image: '/hero1.jpg',
    fallbackImage: 'https://placehold.co/1920x1080/18181b/ffffff?text=Hero+Image+1+-+Mitsubishi+Albay+Showroom',
    title: 'Drive Your Ambition Across Albay & Bicolandia',
    subtitle: 'Welcome to the authorized Mitsubishi Albay showroom. Discover exclusive low downpayment promos, 24-hour fast bank approvals, and authentic Japanese reliability.',
    tag: 'Official Authorized Dealership • Bicol Region',
    highlightUnit: 'All-New 2026 Model Lineup',
  },
  {
    id: 'slide-2',
    // 📸 IMAGE 2: Local file in /public/hero2.jpg
    image: '/hero2.jpg',
    fallbackImage: 'https://placehold.co/1920x1080/18181b/ffffff?text=Hero+Image+2+-+Montero+Sport+Black+Series',
    title: 'Command Every Road in the Montero Sport',
    subtitle: 'Refined 7-seater midsize luxury SUV powered by 2.4L MIVEC Clean Diesel with all-in downpayment bundles starting from only ₱98,000.',
    tag: 'Best-Selling 7-Seater Midsize SUV',
    highlightUnit: 'Montero Sport Black Series',
  },
  {
    id: 'slide-3',
    // 📸 IMAGE 3: Local file in /public/hero3.jpg
    image: '/hero3.jpg',
    fallbackImage: 'https://placehold.co/1920x1080/18181b/ffffff?text=Hero+Image+3+-+All-New+Triton+Athlete+4x4',
    title: 'Unmatched 4x4 Rally Power Built for Bicol Terrain',
    subtitle: 'Conquer the rugged slopes around Mt. Mayon and provincial highways with 204PS Bi-Turbo torque and Super Select 4WD-II engineering.',
    tag: 'Rally-Bred Performance • 204 PS',
    highlightUnit: 'All-New Triton Athlete 4x4',
  },
];

export const ASSET_IMAGES = {
  // Main Showroom Hero Banner
  showroomHero: 'https://placehold.co/1200x700/18181b/ffffff?text=Mitsubishi+Albay+Showroom+Hero+Banner',
  
  // Dealership Physical Location / 3S Facility Photo
  dealershipLocation: 'https://placehold.co/800x500/18181b/ffffff?text=Mitsubishi+Albay+3S+Facility+and+Service+Bays',
  
  // Robert Villa Professional Headshot
  robertVillaHeadshot: 'https://placehold.co/600x600/18181b/ffffff?text=Robert+Villa+Professional+Headshot',
};
