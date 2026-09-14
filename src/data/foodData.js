const foodData = [
  // Bengali
  {
    id: 1,
    name: "Macher Jhol",
    category: "Bengali",
    price: 220,
    emoji: "🍛",
    description: "Traditional Bengali fish curry with potatoes and spices.",
  },
  {
    id: 2,
    name: "Luchi & Aloo Dum",
    category: "Bengali",
    price: 150,
    emoji: "🥘",
    description: "Soft luchi served with delicious Bengali-style aloo dum.",
  },
  {
    id: 3,
    name: "Kosha Mangsho",
    category: "Bengali",
    price: 280,
    emoji: "🍖",
    description: "Slow-cooked Bengali mutton curry with rich spices.",
  },
  {
    id: 4,
    name: "Shorshe Ilish",
    category: "Bengali",
    price: 350,
    emoji: "🐟",
    description: "Hilsa fish cooked in traditional mustard gravy.",
  },

  // Biryani
  {
    id: 5,
    name: "Kolkata Chicken Biryani",
    category: "Biryani",
    price: 249,
    emoji: "🍚",
    description: "Aromatic Kolkata-style biryani with chicken and potato.",
  },
  {
    id: 6,
    name: "Mutton Biryani",
    category: "Biryani",
    price: 299,
    emoji: "🍚",
    description: "Flavorful biryani with tender mutton and aromatic rice.",
  },
  {
    id: 7,
    name: "Egg Biryani",
    category: "Biryani",
    price: 179,
    emoji: "🥚",
    description: "Aromatic biryani served with boiled egg and spices.",
  },

  // North Indian
  {
    id: 8,
    name: "Butter Chicken",
    category: "North Indian",
    price: 260,
    emoji: "🍗",
    description: "Creamy tomato-based chicken curry with Indian spices.",
  },
  {
    id: 9,
    name: "Paneer Butter Masala",
    category: "North Indian",
    price: 220,
    emoji: "🥘",
    description: "Soft paneer cooked in a rich creamy tomato gravy.",
  },
  {
    id: 10,
    name: "Dal Makhani",
    category: "North Indian",
    price: 180,
    emoji: "🥣",
    description: "Creamy black lentils cooked with traditional spices.",
  },

  // South Indian
  {
    id: 11,
    name: "Masala Dosa",
    category: "South Indian",
    price: 160,
    emoji: "🥞",
    description: "Crispy dosa served with masala, sambar and chutney.",
  },
  {
    id: 12,
    name: "Idli Sambar",
    category: "South Indian",
    price: 120,
    emoji: "🍚",
    description: "Soft idlis served with hot sambar and chutney.",
  },
  {
    id: 13,
    name: "Medu Vada",
    category: "South Indian",
    price: 110,
    emoji: "🍩",
    description: "Crispy South Indian vada served with sambar and chutney.",
  },

  // Chinese
  {
    id: 14,
    name: "Chicken Chowmein",
    category: "Chinese",
    price: 190,
    emoji: "🍜",
    description: "Kolkata-style Chinese noodles with chicken and vegetables.",
  },
  {
    id: 15,
    name: "Chicken Fried Rice",
    category: "Chinese",
    price: 180,
    emoji: "🍚",
    description: "Fried rice tossed with chicken, vegetables and spices.",
  },
  {
    id: 16,
    name: "Chilli Chicken",
    category: "Chinese",
    price: 220,
    emoji: "🍗",
    description: "Crispy chicken tossed in spicy Indo-Chinese sauce.",
  },

  // Kathi Rolls
  {
    id: 17,
    name: "Chicken Kathi Roll",
    category: "Kathi Rolls",
    price: 179,
    emoji: "🌯",
    description: "Classic Kolkata-style roll with juicy chicken and spices.",
  },
  {
    id: 18,
    name: "Egg Chicken Roll",
    category: "Kathi Rolls",
    price: 160,
    emoji: "🌯",
    description: "Kathi roll filled with egg, chicken and fresh onions.",
  },
  {
    id: 19,
    name: "Paneer Roll",
    category: "Kathi Rolls",
    price: 140,
    emoji: "🌯",
    description: "Soft roll filled with spicy paneer and fresh vegetables.",
  },

  // Momos
  {
    id: 20,
    name: "Chicken Momos",
    category: "Momos",
    price: 140,
    emoji: "🥟",
    description: "Steamed chicken momos served with spicy chutney.",
  },
  {
    id: 21,
    name: "Veg Momos",
    category: "Momos",
    price: 110,
    emoji: "🥟",
    description: "Steamed vegetable momos with flavorful filling.",
  },
  {
    id: 22,
    name: "Fried Momos",
    category: "Momos",
    price: 150,
    emoji: "🥟",
    description: "Crispy fried momos served with spicy sauce.",
  },

  // Street Food
  {
    id: 23,
    name: "Phuchka",
    category: "Street Food",
    price: 80,
    emoji: "🥟",
    description: "Crispy phuchka filled with spicy and tangy water.",
  },
  {
    id: 24,
    name: "Jhalmuri",
    category: "Street Food",
    price: 70,
    emoji: "🥗",
    description: "Spicy puffed rice mixed with vegetables and spices.",
  },
  {
    id: 25,
    name: "Ghugni",
    category: "Street Food",
    price: 90,
    emoji: "🥣",
    description: "Spicy yellow peas curry served as a popular street snack.",
  },

  // Healthy
  {
    id: 26,
    name: "Fresh Fruit Bowl",
    category: "Healthy",
    price: 140,
    emoji: "🥗",
    description: "Fresh seasonal fruits for a healthy meal.",
  },
  {
    id: 27,
    name: "Grilled Chicken Salad",
    category: "Healthy",
    price: 220,
    emoji: "🥗",
    description: "Fresh vegetables served with grilled chicken.",
  },
  {
    id: 28,
    name: "Vegetable Salad",
    category: "Healthy",
    price: 120,
    emoji: "🥗",
    description: "Fresh seasonal vegetables with a light dressing.",
  },

  // Desserts
  {
    id: 29,
    name: "Rosogolla",
    category: "Desserts",
    price: 100,
    emoji: "🍰",
    description: "Soft and juicy Bengali-style rosogolla.",
  },
  {
    id: 30,
    name: "Mishti Doi",
    category: "Desserts",
    price: 90,
    emoji: "🍮",
    description: "Traditional Bengali sweet yogurt with caramel flavor.",
  },
  {
    id: 31,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 100,
    emoji: "🍩",
    description: "Soft sweet dumplings served in warm sugar syrup.",
  },

  // Beverages
  {
    id: 32,
    name: "Masala Chai",
    category: "Beverages",
    price: 50,
    emoji: "🍵",
    description: "Hot Indian tea prepared with aromatic spices.",
  },
  {
    id: 33,
    name: "Cold Coffee",
    category: "Beverages",
    price: 120,
    emoji: "🥤",
    description: "Chilled creamy coffee served with ice.",
  },
  {
    id: 34,
    name: "Fresh Lime Soda",
    category: "Beverages",
    price: 80,
    emoji: "🥤",
    description: "Refreshing lime drink with a light fizzy taste.",
  },

  // Fast Food
  {
    id: 35,
    name: "Chicken Burger",
    category: "Fast Food",
    price: 199,
    emoji: "🍔",
    description: "Juicy chicken burger with fresh vegetables.",
  },
  {
    id: 36,
    name: "Chicken Pizza",
    category: "Fast Food",
    price: 299,
    emoji: "🍕",
    description: "Cheesy pizza topped with seasoned chicken.",
  },
  {
    id: 37,
    name: "French Fries",
    category: "Fast Food",
    price: 110,
    emoji: "🍟",
    description: "Crispy golden fries served with a tasty dip.",
  },
]

export default foodData