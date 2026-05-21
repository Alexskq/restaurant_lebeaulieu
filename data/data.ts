export const restaurant = {
  nom: "Le Beaulieu",
  slogan: "L'art de recevoir",
  description:
    "Restaurant de cuisine française installé au cœur de Valenciennes, Le Beaulieu vous accueille dans un cadre chaleureux et raffiné. Une cuisine du marché, généreuse et sincère, concoctée avec des produits frais et de saison.",
  adresse: "177 rue de Famars, 59300 Valenciennes",
  telephone: "+33327222872",
  telephoneAffichage: "03 27 22 28 72",
  email: "gueant.laurent@orange.fr",
  instagram: "@lebeaulieuvalenciennes",
  instagramUrl: "https://www.instagram.com/lebeaulieuvalenciennes/",
  facebookUrl: "https://www.facebook.com/profile.php?id=100063241448114",
  mapsUrl:
    "https://maps.google.com/maps?q=177+rue+de+Famars+59300+Valenciennes&output=embed",
  mapsLink: "https://maps.google.com/?q=177+Rue+de+Famars+59300+Valenciennes",
};

export const stats = [
  { value: "Cuisine", label: "Française" },
  { value: "Terrasse", label: "Disponible" },
  { value: "Parking", label: "Gratuit" },
  { value: "Événements", label: "Privés" },
];

export const horaires = [
  {
    jour: "Lundi — Jeudi",
    service: "Déjeuner",
    heures: "11h30 — 14h30",
    ouvert: true,
  },
  {
    jour: "Vendredi",
    service: "Déjeuner + Dîner",
    heures: "11h30 — 14h30 · 18h30 — 21h00",
    ouvert: true,
  },
  {
    jour: "Samedi",
    service: "Déjeuner + Dîner",
    heures: "11h30 — 14h30 · 18h30 — 21h00",
    ouvert: true,
  },
  { jour: "Dimanche", service: "Fermé", heures: "—", ouvert: false },
];

export const services = [
  {
    icon: "🌿",
    label: "Terrasse",
    desc: "Profitez des beaux jours en terrasse",
  },
  {
    icon: "🅿️",
    label: "Parking gratuit",
    desc: "Stationnement disponible à proximité",
  },
  {
    icon: "🎉",
    label: "Événements privés",
    desc: "Anniversaires, séminaires, réceptions",
  },
  {
    icon: "📦",
    label: "Vente à emporter",
    desc: "Nos plats à déguster chez vous",
  },
  {
    icon: "❄️",
    label: "Climatisation",
    desc: "Un confort optimal toute l'année",
  },
  { icon: "📶", label: "WiFi gratuit", desc: "Connexion incluse pour tous" },
  {
    icon: "🐾",
    label: "Animaux acceptés",
    desc: "Vos compagnons sont les bienvenus",
  },
  { icon: "♿", label: "Accessible", desc: "Établissement accessible PMR" },
];

export const paiements = [
  "Espèces",
  "Carte bancaire",
  "Sans contact",
  "Apple Pay",
  "Ticket Restaurant®",
  "Chèque-repas",
];

export const galerie = [
  {
    src: "/photos/repas1.png",
    alt: "Le Beaulieu — plat du chef",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/photos/repas2.png",
    alt: "Le Beaulieu — table dressée",
    span: "",
  },
  { src: "/photos/menu.jpg", alt: "Notre carte", span: "" },
];

export const marqueeItems = [
  "Cuisine Française",
  "Valenciennes",
  "Terrasse",
  "Fait Maison",
  "Événements Privés",
  "Déjeuner & Dîner",
  "Depuis Toujours",
];
