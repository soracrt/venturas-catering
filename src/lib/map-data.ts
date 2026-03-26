export type EventPin = {
  id: number;
  area: string;
  areaMs: string;
  lat: number;
  lng: number;
  type: "corporate" | "wedding" | "private";
  recentEvent: string;
  client: string;
  pax: number;
  venue: string;
  highlight: string; // what made it special
};

export const VENTURAS_HQ = { lat: 3.0733, lng: 101.5185 }; // Shah Alam

export const EVENT_PINS: EventPin[] = [
  { id: 1,  area: "Shah Alam",       areaMs: "Shah Alam",         lat: 3.0733,  lng: 101.5185, type: "corporate", recentEvent: "Annual Corporate Gala",        client: "UEM Group",             pax: 350, venue: "Shah Alam Convention Centre",  highlight: "Live carving station + full buffet" },
  { id: 2,  area: "Subang Jaya",     areaMs: "Subang Jaya",       lat: 3.0559,  lng: 101.5851, type: "wedding",   recentEvent: "Garden Wedding Reception",      client: "Razif & Aisyah",        pax: 280, venue: "Subang Avenue Ballroom",        highlight: "3 live stations, floral centrepieces" },
  { id: 3,  area: "Petaling Jaya",   areaMs: "Petaling Jaya",     lat: 3.1070,  lng: 101.6067, type: "corporate", recentEvent: "Product Launch Cocktail Night", client: "Cosentino Malaysia",     pax: 180, venue: "PJ Hilton Grand Ballroom",     highlight: "Canapé service & live oyster bar" },
  { id: 4,  area: "Cyberjaya",       areaMs: "Cyberjaya",         lat: 2.9213,  lng: 101.6559, type: "corporate", recentEvent: "Conference Full-Day Catering",  client: "Axiata Group",          pax: 220, venue: "Cyberview Lodge",              highlight: "Morning, lunch & afternoon breaks" },
  { id: 5,  area: "Putrajaya",       areaMs: "Putrajaya",         lat: 2.9264,  lng: 101.6964, type: "private",   recentEvent: "Hari Raya Open House",          client: "Private Client",        pax: 400, venue: "Residence, Precinct 9",        highlight: "Traditional Malaysian spread, 4 stations" },
  { id: 6,  area: "KLCC",            areaMs: "KLCC, Kuala Lumpur",lat: 3.1579,  lng: 101.7116, type: "corporate", recentEvent: "Boardroom Lunch Series",        client: "Petronas",              pax: 40,  venue: "Petronas Twin Towers, Level 30",highlight: "Silver service plated lunch" },
  { id: 7,  area: "Mont Kiara",      areaMs: "Mont Kiara",        lat: 3.1696,  lng: 101.6504, type: "private",   recentEvent: "50th Birthday Dinner",          client: "Private Client",        pax: 80,  venue: "Private Villa, MK",            highlight: "Bespoke 5-course menu" },
  { id: 8,  area: "Bangsar",         areaMs: "Bangsar",           lat: 3.1333,  lng: 101.6800, type: "wedding",   recentEvent: "Intimate Wedding Luncheon",     client: "Fahmi & Liyana",        pax: 120, venue: "Bangsar Shopping Centre Hall", highlight: "Western fusion + Halal buffet" },
  { id: 9,  area: "Damansara",       areaMs: "Damansara",         lat: 3.1434,  lng: 101.6270, type: "corporate", recentEvent: "Annual Dinner & Awards",        client: "Maybank",               pax: 500, venue: "Tropicana Golf & Country Club", highlight: "Largest event this year" },
  { id: 10, area: "Puchong",         areaMs: "Puchong",           lat: 3.0297,  lng: 101.6208, type: "private",   recentEvent: "Community Majlis Keramaian",   client: "Masjid Al-Hidayah",     pax: 600, venue: "Puchong Perdana Community Hall", highlight: "Largest community event catered" },
  { id: 11, area: "Sunway",          areaMs: "Sunway, Petaling Jaya", lat: 3.0726, lng: 101.6055, type: "corporate", recentEvent: "Convocation Dinner",       client: "Taylor's University",   pax: 420, venue: "Sunway Lagoon Convention Centre", highlight: "3 consecutive years, flawless" },
  { id: 12, area: "Setia Alam",      areaMs: "Setia Alam",        lat: 3.0956,  lng: 101.4527, type: "wedding",   recentEvent: "Grand Wedding Reception",      client: "Ahmad & Nurul",         pax: 500, venue: "Dewan Setia Alam",             highlight: "Multiple live stations, 500 pax" },
];

// Venue guides — pre-loaded floor plan notes for common venues
export type VenueGuide = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  capacity: string;
  notes: string;
  buffetZone: string;
  parkingNote: string;
};

export const VENUE_GUIDES: VenueGuide[] = [
  {
    id: 1,
    name: "Shah Alam Convention Centre (SACC)",
    lat: 3.0750, lng: 101.5140,
    capacity: "Up to 2,000 pax",
    notes: "Venturas has catered here 40+ times. Loading bay at Entrance D (north side).",
    buffetZone: "Standard setup: 6 buffet islands along the east wall. Live station best positioned near Stage Left.",
    parkingNote: "Delivery vehicles use Lot B1/B2 basement. 2-hour free loading.",
  },
  {
    id: 2,
    name: "Sunway Lagoon Convention Centre",
    lat: 3.0726, lng: 101.6055,
    capacity: "Up to 800 pax",
    notes: "Our most frequent venue. Kitchen access via service corridor behind Pillar 12.",
    buffetZone: "4 buffet lines recommended for 400+ pax. Live station beside the panoramic windows for guest experience.",
    parkingNote: "Supplier parking at Zone C. Access card required — Venturas coordinator carries one.",
  },
  {
    id: 3,
    name: "Putrajaya International Convention Centre",
    lat: 2.9357, lng: 101.6880,
    capacity: "Up to 5,000 pax",
    notes: "Largest venue we service. Requires 2-day advance setup coordination.",
    buffetZone: "Hall 1: 12 buffet islands in 3 rows. Hall 3: Suitable for cocktail-style canape service.",
    parkingNote: "Multiple loading bays. Dedicated caterer entrance Gate 7.",
  },
];

// Custom dark Venturas map style
export const VENTURAS_MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry",                    stylers: [{ color: "#0d0d0d" }] },
  { elementType: "labels.text.stroke",          stylers: [{ color: "#0d0d0d" }] },
  { elementType: "labels.text.fill",            stylers: [{ color: "#5a5040" }] },
  { featureType: "road",        elementType: "geometry",            stylers: [{ color: "#1a1810" }] },
  { featureType: "road",        elementType: "geometry.stroke",     stylers: [{ color: "#0d0d0d" }] },
  { featureType: "road",        elementType: "labels.text.fill",    stylers: [{ color: "#7a6840" }] },
  { featureType: "road.highway",elementType: "geometry",            stylers: [{ color: "#2a2418" }] },
  { featureType: "road.highway",elementType: "geometry.stroke",     stylers: [{ color: "#1a1408" }] },
  { featureType: "road.highway",elementType: "labels.text.fill",    stylers: [{ color: "#c9a84c" }] },
  { featureType: "water",       elementType: "geometry",            stylers: [{ color: "#080c12" }] },
  { featureType: "water",       elementType: "labels.text.fill",    stylers: [{ color: "#3a4c5a" }] },
  { featureType: "poi",         elementType: "geometry",            stylers: [{ color: "#0f0f0a" }] },
  { featureType: "poi",         elementType: "labels.text.fill",    stylers: [{ color: "#5a5040" }] },
  { featureType: "poi.park",    elementType: "geometry",            stylers: [{ color: "#0a0f08" }] },
  { featureType: "poi.park",    elementType: "labels.text.fill",    stylers: [{ color: "#3a4a28" }] },
  { featureType: "transit",     elementType: "geometry",            stylers: [{ color: "#1a1810" }] },
  { featureType: "transit.station", elementType: "labels.text.fill",stylers: [{ color: "#c9a84c" }] },
  { featureType: "administrative", elementType: "geometry",         stylers: [{ color: "#2a2418" }] },
  { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#7a6840" }] },
  { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#3a3020" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#c9a84c" }] },
];
