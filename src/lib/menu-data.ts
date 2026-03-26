export type MenuCategory = "buffet" | "bento" | "halal" | "vegan";

export type MenuItem = {
  id: string;
  name: string;
  nameMs?: string; // Malay name
  category: MenuCategory[];
  cuisine: string;
  description: string;
  descriptionMs?: string;
  ingredients: string[];
  allergens?: string[];
  priceFrom?: string; // per pax
  popular?: boolean;
  spicy?: boolean;
  new?: boolean;
  altText: string; // SEO alt text for image
};

export const menuItems: MenuItem[] = [
  // ── BUFFET ────────────────────────────────────────────────────────────────
  {
    id: "nasi-lemak-station",
    name: "Nasi Lemak Station",
    nameMs: "Stesen Nasi Lemak",
    category: ["buffet", "halal"],
    cuisine: "Malaysian",
    description: "Fragrant coconut rice with sambal, fried anchovies, roasted peanuts, boiled egg, and your choice of lauk.",
    descriptionMs: "Nasi lemak panas dengan sambal istimewa, ikan bilis goreng, kacang panggang, telur rebus dan lauk pilihan.",
    ingredients: ["Coconut Rice", "House Sambal", "Anchovies", "Roasted Peanuts", "Boiled Egg", "Ayam Rendang", "Cucumber"],
    allergens: ["Nuts", "Eggs"],
    priceFrom: "RM 22",
    popular: true,
    altText: "Halal nasi lemak catering station Shah Alam Selangor",
  },
  {
    id: "rendang-daging",
    name: "Rendang Daging",
    nameMs: "Rendang Daging Premium",
    category: ["buffet", "halal"],
    cuisine: "Malaysian",
    description: "Slow-braised premium beef in rich coconut and spice gravy, cooked overnight for maximum depth.",
    descriptionMs: "Daging lembu premium dimasak perlahan dengan santan dan rempah pilihan.",
    ingredients: ["Grass-fed Beef", "Coconut Milk", "Lemongrass", "Galangal", "Kaffir Lime Leaf", "Toasted Coconut"],
    allergens: [],
    priceFrom: "RM 28",
    popular: true,
    altText: "Rendang daging catering buffet Malaysia",
  },
  {
    id: "western-roast",
    name: "Roast Beef Carving Station",
    nameMs: "Stesen Daging Panggang",
    category: ["buffet", "halal"],
    cuisine: "Western",
    description: "Premium beef rump roasted to medium-rare perfection, carved live at your event with jus and condiments.",
    descriptionMs: "Daging lembu bakar premium, dipotong langsung semasa majlis.",
    ingredients: ["Prime Rump Beef", "Rosemary", "Garlic Jus", "Wholegrain Mustard", "Yorkshire Pudding", "Roast Vegetables"],
    allergens: ["Gluten", "Mustard"],
    priceFrom: "RM 45",
    altText: "Live carving station roast beef catering corporate event KL",
  },
  {
    id: "salmon-en-croute",
    name: "Salmon en Croûte",
    nameMs: "Salmon Berlapis Pastri",
    category: ["buffet", "halal"],
    cuisine: "Western",
    description: "Norwegian salmon fillet wrapped in flaky puff pastry with spinach and dill cream cheese.",
    descriptionMs: "Fillet salmon Norway dibungkus pastri rangup dengan bayam dan krim keju dill.",
    ingredients: ["Norwegian Salmon", "Puff Pastry", "Cream Cheese", "Dill", "Spinach", "Lemon Beurre Blanc"],
    allergens: ["Gluten", "Dairy", "Fish"],
    priceFrom: "RM 52",
    new: true,
    altText: "Salmon en croute catering premium event Malaysia",
  },
  {
    id: "dim-sum-station",
    name: "Dim Sum Live Station",
    nameMs: "Stesen Dim Sum Langsung",
    category: ["buffet", "halal"],
    cuisine: "Chinese-Halal",
    description: "Freshly steamed and fried dim sum made to order — har gao, siu mai, char siu bao, and more.",
    descriptionMs: "Dim sum halal segar dikukus dan digoreng mengikut pesanan anda.",
    ingredients: ["Prawn Dumplings", "Chicken Siu Mai", "BBQ Bao", "Turnip Cake", "Custard Buns", "Chilli Oil"],
    allergens: ["Gluten", "Shellfish"],
    priceFrom: "RM 38",
    popular: true,
    altText: "Halal dim sum live station catering Selangor",
  },
  {
    id: "thai-green-curry",
    name: "Thai Green Chicken Curry",
    nameMs: "Kari Hijau Ayam Thai",
    category: ["buffet", "halal"],
    cuisine: "Thai",
    description: "Fragrant green curry with free-range chicken, baby eggplant, bamboo shoots, and Thai basil.",
    descriptionMs: "Kari hijau thai yang wangi dengan ayam kampung, terung muda dan daun basil.",
    ingredients: ["Free-range Chicken", "Green Curry Paste", "Coconut Milk", "Baby Eggplant", "Bamboo Shoots", "Thai Basil"],
    allergens: [],
    priceFrom: "RM 25",
    spicy: true,
    altText: "Thai green curry halal catering Malaysia",
  },

  // ── BENTO ─────────────────────────────────────────────────────────────────
  {
    id: "bento-signature",
    name: "Signature Bento Box",
    nameMs: "Kotak Bento Signature",
    category: ["bento", "halal"],
    cuisine: "Malaysian Fusion",
    description: "Fluffy coconut rice, rendang ayam, acar, ulam raja, keropok, and seasonal fruit. Minimum 20 boxes.",
    descriptionMs: "Nasi lemak, rendang ayam, acar, ulam raja, keropok dan buah musim. Minimum 20 kotak.",
    ingredients: ["Coconut Rice", "Chicken Rendang", "Pickle Acar", "Ulam Raja", "Prawn Crackers", "Seasonal Fruit"],
    allergens: ["Nuts", "Shellfish"],
    priceFrom: "RM 18",
    popular: true,
    altText: "Halal bento box catering Shah Alam minimum 20 pax",
  },
  {
    id: "bento-western",
    name: "Western Bento Box",
    nameMs: "Kotak Bento Barat",
    category: ["bento", "halal"],
    cuisine: "Western",
    description: "Herb-grilled chicken breast, creamy mash, seasonal salad, dinner roll, and brownie.",
    descriptionMs: "Dada ayam bakar herba, pes kentang berkrim, salad, roti dan browni.",
    ingredients: ["Herb Chicken Breast", "Mashed Potato", "Seasonal Salad", "Dinner Roll", "Chocolate Brownie"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    priceFrom: "RM 22",
    altText: "Western bento box corporate catering Malaysia",
  },
  {
    id: "bento-japanese",
    name: "Japanese Bento Box",
    nameMs: "Kotak Bento Jepun",
    category: ["bento", "halal"],
    cuisine: "Japanese-Halal",
    description: "Teriyaki chicken, Japanese rice, tamago, edamame, gyoza, and miso soup.",
    descriptionMs: "Ayam teriyaki halal, nasi Jepun, tamago, edamame, gyoza dan sup miso.",
    ingredients: ["Teriyaki Chicken", "Japanese Rice", "Tamagoyaki", "Edamame", "Chicken Gyoza", "Miso Soup"],
    allergens: ["Soy", "Eggs", "Gluten"],
    priceFrom: "RM 25",
    new: true,
    altText: "Halal Japanese bento box catering Kuala Lumpur",
  },

  // ── VEGAN ─────────────────────────────────────────────────────────────────
  {
    id: "vegan-mezze",
    name: "Mediterranean Mezze Platter",
    nameMs: "Plat Mezze Mediterranean",
    category: ["vegan", "buffet"],
    cuisine: "Mediterranean",
    description: "Hummus, babaganoush, tabbouleh, falafel, marinated olives, flatbread, and roasted vegetables.",
    descriptionMs: "Hummus, babaganoush, tabbouleh, falafel, zaitun perap, roti pita dan sayur bakar.",
    ingredients: ["Hummus", "Babaganoush", "Tabbouleh", "Falafel", "Marinated Olives", "Flatbread", "Roasted Peppers"],
    allergens: ["Gluten", "Sesame"],
    priceFrom: "RM 28",
    popular: true,
    altText: "Vegan Mediterranean mezze catering Malaysia",
  },
  {
    id: "vegan-nasi-ulam",
    name: "Nasi Ulam (Vegan)",
    nameMs: "Nasi Ulam Vegan",
    category: ["vegan", "halal", "buffet"],
    cuisine: "Malaysian",
    description: "Traditional Malay mixed herb rice with torch ginger, lemongrass, bunga kantan, and kerisik.",
    descriptionMs: "Nasi ulam tradisional Melayu dengan bunga kantan, serai, halia dan kerisik.",
    ingredients: ["Long Grain Rice", "Torch Ginger Flower", "Lemongrass", "Turmeric Leaf", "Kaffir Lime", "Toasted Coconut"],
    allergens: ["Coconut"],
    priceFrom: "RM 20",
    altText: "Vegan nasi ulam traditional Malaysian catering",
  },
  {
    id: "vegan-buddha-bowl",
    name: "Rainbow Buddha Bowl",
    nameMs: "Mangkuk Buddha Pelangi",
    category: ["vegan", "bento"],
    cuisine: "Fusion",
    description: "Brown rice, roasted chickpeas, avocado, pickled red cabbage, edamame, mango salsa, and tahini dressing.",
    descriptionMs: "Nasi perang, kacang chickpeas bakar, avokado, kobis merah jeruk, edamame, salsa mangga dan sos tahini.",
    ingredients: ["Brown Rice", "Roasted Chickpeas", "Avocado", "Pickled Red Cabbage", "Edamame", "Mango Salsa", "Tahini"],
    allergens: ["Sesame"],
    priceFrom: "RM 22",
    new: true,
    altText: "Vegan buddha bowl bento catering Malaysia",
  },
];

export const categoryLabels: Record<MenuCategory, { en: string; ms: string; color: string; bg: string }> = {
  buffet:  { en: "Buffet",     ms: "Bufet",        color: "text-blue-700",   bg: "bg-blue-50 border-blue-200" },
  bento:   { en: "Bento",      ms: "Bento",         color: "text-amber-700",  bg: "bg-amber-50 border-amber-200" },
  halal:   { en: "Halal",      ms: "Halal",         color: "text-emerald-700",bg: "bg-emerald-50 border-emerald-200" },
  vegan:   { en: "Vegan",      ms: "Vegan",         color: "text-green-700",  bg: "bg-green-50 border-green-200" },
};
