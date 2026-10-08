const products = [
  {
    id: 1,
    name: "ASUS ROG Strix G16 (2025)",
    slug: "asus-rog-strix-g16-2025",
    category: "Laptops",
    subcategory: "Gaming Laptops",

    price: 1499,
    oldPrice: 1699,
    currency: "USD",

    rating: 4.8,
    reviews: 126,

    stock: 14,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "ASUS",

    images: [
      "/images/products/asus-rog-strix-g16-1.webp",
      "/images/products/asus-rog-strix-g16-2.webp",
      "/images/products/asus-rog-strix-g16-3.webp",
      "/images/products/asus-rog-strix-g16-4.webp",
      "/images/products/asus-rog-strix-g16-5.webp",
    ],

    shortDescription:
      "A high-performance gaming laptop built for demanding games, creative workloads, and everyday performance.",

    description:
      "The ASUS ROG Strix G16 (2025) combines powerful hardware with a fast high-resolution display to deliver a smooth and responsive gaming experience. It is designed for gamers and users who need strong performance for demanding applications.",

    specs: {
      processor: "Intel Core i7-14650HX",
      gpu: "NVIDIA GeForce RTX 5060 8GB",
      ram: "16GB DDR5",
      storage: "1TB PCIe 4.0 NVMe SSD",
      display: '16" QHD+ 240Hz',
      resolution: "2560 × 1600",
      refreshRate: "240Hz",
      operatingSystem: "Windows 11 Home",
      battery: "90Wh",
      weight: "2.65 kg",
    },

    colors: ["Eclipse Gray"],

    features: [
      "QHD+ 240Hz ROG Nebula Display",
      "NVIDIA GeForce RTX 5060 graphics",
      "Intel Core i7-14650HX processor",
      "16GB DDR5 memory",
      "Advanced gaming cooling system",
    ],
  },
  {
    id: 2,
    name: "ASUS ROG Zephyrus G14 (2025)",
    slug: "asus-rog-zephyrus-g14-2025",
    category: "Laptops",
    subcategory: "Gaming Laptops",

    price: 1799,
    oldPrice: 1999,
    currency: "USD",

    rating: 4.9,
    reviews: 98,

    stock: 9,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "ASUS",

    images: [
      "/images/products/asus-rog-zephyrus-g14-1.webp",
      "/images/products/asus-rog-zephyrus-g14-2.webp",
      "/images/products/asus-rog-zephyrus-g14-3.webp",
      "/images/products/asus-rog-zephyrus-g14-4.webp",
      "/images/products/asus-rog-zephyrus-g14-5.webp",
    ],

    shortDescription:
      "A compact and powerful gaming laptop designed for high-performance gaming, creative work, and portability.",

    description:
      "The ASUS ROG Zephyrus G14 (2025) combines powerful gaming hardware with a compact premium design. Its high-refresh-rate display, dedicated graphics, and efficient cooling make it suitable for demanding games and creative workloads while remaining easy to carry.",

    specs: {
      processor: "AMD Ryzen AI 9 HX 370",
      gpu: "NVIDIA GeForce RTX 5070 8GB",
      ram: "32GB DDR5",
      storage: "1TB PCIe 4.0 NVMe SSD",
      display: '14" 3K OLED 120Hz',
      resolution: "2880 × 1800",
      refreshRate: "120Hz",
      operatingSystem: "Windows 11 Home",
      battery: "73Wh",
      weight: "1.50 kg",
    },

    colors: ["Platinum White", "Eclipse Gray"],

    features: [
      "3K 120Hz ROG Nebula OLED Display",
      "NVIDIA GeForce RTX 5070 graphics",
      "AMD Ryzen AI 9 HX 370 processor",
      "32GB DDR5 memory",
      "Compact and lightweight design",
    ],
  },
  {
    id: 3,
    name: "Lenovo Legion Pro 5i Gen 10",
    slug: "lenovo-legion-pro-5i-gen-10",
    category: "Laptops",
    subcategory: "Gaming Laptops",

    price: 1649,
    oldPrice: 1849,
    currency: "USD",

    rating: 4.7,
    reviews: 114,

    stock: 12,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Lenovo",

    images: [
      "/images/products/lenovo-legion-pro-5i-gen-10-1.webp",
      "/images/products/lenovo-legion-pro-5i-gen-10-2.webp",
      "/images/products/lenovo-legion-pro-5i-gen-10-3.webp",
      "/images/products/lenovo-legion-pro-5i-gen-10-4.webp",
      "/images/products/lenovo-legion-pro-5i-gen-10-5.webp",
    ],

    shortDescription:
      "A powerful gaming laptop built for demanding games, high-performance applications, and competitive gaming.",

    description:
      "The Lenovo Legion Pro 5i Gen 10 delivers strong gaming and multitasking performance with powerful hardware and a high-refresh-rate display. It is designed for gamers and creators who need reliable performance during demanding workloads.",

    specs: {
      processor: "Intel Core Ultra 9 275HX",
      gpu: "NVIDIA GeForce RTX 5070 8GB",
      ram: "32GB DDR5",
      storage: "1TB PCIe 4.0 NVMe SSD",
      display: '16" WQXGA 240Hz',
      resolution: "2560 × 1600",
      refreshRate: "240Hz",
      operatingSystem: "Windows 11 Home",
      battery: "80Wh",
      weight: "2.45 kg",
    },

    colors: ["Eclipse Black"],

    features: [
      "16-inch WQXGA 240Hz display",
      "NVIDIA GeForce RTX 5070 graphics",
      "Intel Core Ultra 9 processor",
      "32GB DDR5 memory",
      "Advanced Legion ColdFront cooling system",
    ],
  },
  {
    id: 4,
    name: "Lenovo Legion 7i Gen 10",
    slug: "lenovo-legion-7i-gen-10",
    category: "Laptops",
    subcategory: "Gaming Laptops",

    price: 1999,
    oldPrice: 2199,
    currency: "USD",

    rating: 4.8,
    reviews: 87,

    stock: 7,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Lenovo",

    images: [
      "/images/products/lenovo-legion-7i-gen-10-1.webp",
      "/images/products/lenovo-legion-7i-gen-10-2.webp",
      "/images/products/lenovo-legion-7i-gen-10-3.webp",
      "/images/products/lenovo-legion-7i-gen-10-4.webp",
      "/images/products/lenovo-legion-7i-gen-10-5.webp",
    ],

    shortDescription:
      "A premium gaming laptop that combines powerful hardware, a fast display, and a refined design for demanding users.",

    description:
      "The Lenovo Legion 7i Gen 10 is designed for users who want strong gaming performance without sacrificing premium build quality. Its powerful processor, dedicated graphics, and high-refresh-rate display provide a smooth experience for gaming, creative applications, and everyday workloads.",

    specs: {
      processor: "Intel Core Ultra 9 275HX",
      gpu: "NVIDIA GeForce RTX 5070 8GB",
      ram: "32GB DDR5",
      storage: "1TB PCIe 4.0 NVMe SSD",
      display: '16" WQXGA 240Hz',
      resolution: "2560 × 1600",
      refreshRate: "240Hz",
      operatingSystem: "Windows 11 Home",
      battery: "99.9Wh",
      weight: "2.24 kg",
    },

    colors: ["Eclipse Black"],

    features: [
      "16-inch WQXGA 240Hz display",
      "NVIDIA GeForce RTX 5070 graphics",
      "Intel Core Ultra 9 processor",
      "32GB DDR5 memory",
      "Premium aluminum chassis",
    ],
  },
  {
    id: 5,
    name: "Apple MacBook Pro 14-inch (M5)",
    slug: "apple-macbook-pro-14-inch-m5",
    category: "Laptops",
    subcategory: "Professional Laptops",

    price: 1799,
    oldPrice: 1999,
    currency: "USD",

    rating: 4.9,
    reviews: 143,

    stock: 11,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Apple",

    images: [
      "/images/products/apple-macbook-pro-14-inch-m5-1.webp",
      "/images/products/apple-macbook-pro-14-inch-m5-2.webp",
      "/images/products/apple-macbook-pro-14-inch-m5-3.webp",
      "/images/products/apple-macbook-pro-14-inch-m5-4.webp",
      "/images/products/apple-macbook-pro-14-inch-m5-5.webp",
    ],

    shortDescription:
      "A premium 14-inch laptop designed for professional workflows, creative applications, and everyday productivity.",

    description:
      "The MacBook Pro 14-inch with the M5 chip combines powerful performance with a compact professional design. Its high-quality display, efficient Apple silicon, and long battery life make it suitable for demanding creative and productivity workflows.",

    specs: {
      processor: "Apple M5",
      gpu: "Integrated 10-core GPU",
      ram: "16GB Unified Memory",
      storage: "512GB SSD",
      display: '14.2" Liquid Retina XDR',
      resolution: "3024 × 1964",
      refreshRate: "120Hz",
      operatingSystem: "macOS",
      battery: "72.4Wh",
      weight: "1.55 kg",
    },

    colors: ["Space Black", "Silver"],

    features: [
      "Liquid Retina XDR display",
      "Apple M5 chip",
      "16GB unified memory",
      "Long battery life",
      "Premium aluminum design",
    ],
  },
  {
    id: 6,
    name: "Apple MacBook Air 15-inch (M4)",
    slug: "apple-macbook-air-15-inch-m4",
    category: "Laptops",
    subcategory: "Ultrabooks",

    price: 1299,
    oldPrice: 1449,
    currency: "USD",

    rating: 4.8,
    reviews: 118,

    stock: 16,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Apple",

    images: [
      "/images/products/apple-macbook-air-15-inch-m4-1.webp",
      "/images/products/apple-macbook-air-15-inch-m4-2.webp",
      "/images/products/apple-macbook-air-15-inch-m4-3.webp",
      "/images/products/apple-macbook-air-15-inch-m4-4.webp",
      "/images/products/apple-macbook-air-15-inch-m4-5.webp",
    ],

    shortDescription:
      "A slim and lightweight 15-inch laptop offering efficient performance, a large display, and excellent portability.",

    description:
      "The MacBook Air 15-inch with the M4 chip combines a large, high-quality display with a thin and lightweight design. It is built for everyday productivity, creative tasks, studying, and multitasking while maintaining excellent portability.",

    specs: {
      processor: "Apple M4",
      gpu: "Integrated 10-core GPU",
      ram: "16GB Unified Memory",
      storage: "512GB SSD",
      display: '15.3" Liquid Retina',
      resolution: "2880 × 1864",
      refreshRate: "60Hz",
      operatingSystem: "macOS",
      battery: "66.5Wh",
      weight: "1.51 kg",
    },

    colors: ["Midnight", "Starlight", "Silver", "Sky Blue"],

    features: [
      "15.3-inch Liquid Retina display",
      "Apple M4 chip",
      "16GB unified memory",
      "Fanless silent design",
      "All-day battery life",
    ],
  },
  {
    id: 7,
    name: "Dell XPS 16",
    slug: "dell-xps-16",
    category: "Laptops",
    subcategory: "Premium Laptops",

    price: 1899,
    oldPrice: 2099,
    currency: "USD",

    rating: 4.7,
    reviews: 92,

    stock: 8,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Dell",

    images: [
      "/images/products/dell-xps-16-1.webp",
      "/images/products/dell-xps-16-2.webp",
      "/images/products/dell-xps-16-3.webp",
      "/images/products/dell-xps-16-4.webp",
      "/images/products/dell-xps-16-5.webp",
    ],

    shortDescription:
      "A premium 16-inch laptop built for productivity, creative work, and demanding everyday tasks.",

    description:
      "The Dell XPS 16 combines a large high-resolution display with powerful hardware and a premium minimalist design. It is designed for professionals, creators, and users who need strong performance for demanding applications and multitasking.",

    specs: {
      processor: "Intel Core Ultra 9 285H",
      gpu: "NVIDIA GeForce RTX 5060 8GB",
      ram: "32GB DDR5",
      storage: "1TB PCIe NVMe SSD",
      display: '16.3" 3.2K OLED',
      resolution: "3200 × 2000",
      refreshRate: "120Hz",
      operatingSystem: "Windows 11 Home",
      battery: "99.5Wh",
      weight: "2.13 kg",
    },

    colors: ["Platinum", "Graphite"],

    features: [
      "16.3-inch 3.2K OLED display",
      "NVIDIA GeForce RTX 5060 graphics",
      "Intel Core Ultra 9 processor",
      "32GB DDR5 memory",
      "Premium aluminum and glass design",
    ],
  },
  {
    id: 8,
    name: "HP Omen 16",
    slug: "hp-omen-16",
    category: "Laptops",
    subcategory: "Gaming Laptops",

    price: 1499,
    oldPrice: 1699,
    currency: "USD",

    rating: 4.6,
    reviews: 105,

    stock: 13,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "HP",

    images: [
      "/images/products/hp-omen-16-1.webp",
      "/images/products/hp-omen-16-2.webp",
      "/images/products/hp-omen-16-3.webp",
      "/images/products/hp-omen-16-4.webp",
      "/images/products/hp-omen-16-5.webp",
    ],

    shortDescription:
      "A powerful gaming laptop designed for smooth gameplay, demanding applications, and everyday performance.",

    description:
      "The HP Omen 16 combines powerful gaming hardware with a fast display and a clean modern design. It is built to handle demanding games, creative workloads, and everyday multitasking with responsive performance.",

    specs: {
      processor: "Intel Core Ultra 7 255H",
      gpu: "NVIDIA GeForce RTX 5060 8GB",
      ram: "16GB DDR5",
      storage: "1TB PCIe 4.0 NVMe SSD",
      display: '16.1" QHD 240Hz',
      resolution: "2560 × 1440",
      refreshRate: "240Hz",
      operatingSystem: "Windows 11 Home",
      battery: "83Wh",
      weight: "2.35 kg",
    },

    colors: ["Shadow Black"],

    features: [
      "16.1-inch QHD 240Hz display",
      "NVIDIA GeForce RTX 5060 graphics",
      "Intel Core Ultra 7 processor",
      "16GB DDR5 memory",
      "Advanced OMEN cooling system",
    ],
  },
  {
    id: 9,
    name: "Acer Predator Helios Neo 16",
    slug: "acer-predator-helios-neo-16",
    category: "Laptops",
    subcategory: "Gaming Laptops",

    price: 1399,
    oldPrice: 1599,
    currency: "USD",

    rating: 4.7,
    reviews: 89,

    stock: 15,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Acer",

    images: [
      "/images/products/acer-predator-helios-neo-16-1.webp",
      "/images/products/acer-predator-helios-neo-16-2.webp",
      "/images/products/acer-predator-helios-neo-16-3.webp",
      "/images/products/acer-predator-helios-neo-16-4.webp",
      "/images/products/acer-predator-helios-neo-16-5.webp",
    ],

    shortDescription:
      "A performance-focused gaming laptop built for high-refresh-rate gaming and demanding applications.",

    description:
      "The Acer Predator Helios Neo 16 delivers powerful gaming performance in a bold and durable design. With dedicated graphics, a fast high-resolution display, and an advanced cooling system, it is designed for demanding games and intensive workloads.",

    specs: {
      processor: "Intel Core Ultra 9 275HX",
      gpu: "NVIDIA GeForce RTX 5070 8GB",
      ram: "32GB DDR5",
      storage: "1TB PCIe 4.0 NVMe SSD",
      display: '16" WQXGA 240Hz',
      resolution: "2560 × 1600",
      refreshRate: "240Hz",
      operatingSystem: "Windows 11 Home",
      battery: "90Wh",
      weight: "2.60 kg",
    },

    colors: ["Obsidian Black"],

    features: [
      "16-inch WQXGA 240Hz display",
      "NVIDIA GeForce RTX 5070 graphics",
      "Intel Core Ultra 9 processor",
      "32GB DDR5 memory",
      "Advanced Predator cooling system",
    ],
  },
  {
    id: 10,
    name: "Razer Blade 16",
    slug: "razer-blade-16",
    category: "Laptops",
    subcategory: "Gaming Laptops",

    price: 2499,
    oldPrice: 2799,
    currency: "USD",

    rating: 4.8,
    reviews: 76,

    stock: 6,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Razer",

    images: [
      "/images/products/razer-blade-16-1.webp",
      "/images/products/razer-blade-16-2.webp",
      "/images/products/razer-blade-16-3.webp",
      "/images/products/razer-blade-16-4.webp",
      "/images/products/razer-blade-16-5.webp",
    ],

    shortDescription:
      "A premium high-performance gaming laptop combining powerful hardware with a sleek and minimalist aluminum design.",

    description:
      "The Razer Blade 16 is designed for users who want desktop-class gaming performance in a premium portable chassis. Its powerful processor, dedicated graphics, and high-refresh-rate display make it suitable for demanding games, creative workloads, and professional applications.",

    specs: {
      processor: "Intel Core Ultra 9 275HX",
      gpu: "NVIDIA GeForce RTX 5090 24GB",
      ram: "64GB DDR5",
      storage: "2TB PCIe 4.0 NVMe SSD",
      display: '16" Dual-Mode Mini-LED',
      resolution: "3840 × 2400",
      refreshRate: "240Hz",
      operatingSystem: "Windows 11 Home",
      battery: "95.2Wh",
      weight: "2.14 kg",
    },

    colors: ["Black"],

    features: [
      "16-inch high-resolution Mini-LED display",
      "NVIDIA GeForce RTX 5090 graphics",
      "Intel Core Ultra 9 processor",
      "64GB DDR5 memory",
      "Premium CNC aluminum chassis",
    ],
  },
  {
    id: 11,
    name: "Apple iPhone 17 Pro",
    slug: "apple-iphone-17-pro",
    category: "Smartphones",
    subcategory: "Flagship Smartphones",

    price: 1199,
    oldPrice: 1299,
    currency: "USD",

    rating: 4.9,
    reviews: 184,

    stock: 10,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Apple",

    images: [
      "/images/products/apple-iphone-17-pro-1.webp",
      "/images/products/apple-iphone-17-pro-2.webp",
      "/images/products/apple-iphone-17-pro-3.webp",
      "/images/products/apple-iphone-17-pro-4.webp",
      "/images/products/apple-iphone-17-pro-5.webp",
    ],

    shortDescription:
      "A premium flagship smartphone with powerful performance, an advanced camera system, and a high-quality display.",

    description:
      "The Apple iPhone 17 Pro combines powerful performance with a refined design and an advanced camera system. Its high-refresh-rate display, premium build, and efficient hardware make it suitable for photography, gaming, content creation, and everyday use.",

    specs: {
      processor: "Apple A19 Pro",
      ram: "12GB",
      storage: "256GB",
      display: '6.3" Super Retina XDR OLED',
      resolution: "2622 × 1206",
      refreshRate: "120Hz",
      operatingSystem: "iOS 26",
      battery: "Built-in Li-Ion",
      weight: "206 g",
    },

    colors: ["Cosmic Orange", "Deep Blue", "Silver"],

    features: [
      "6.3-inch Super Retina XDR OLED display",
      "Advanced Pro camera system",
      "Apple A19 Pro chip",
      "120Hz ProMotion display",
      "Titanium-inspired premium design",
    ],
  },
  {
    id: 12,
    name: "Apple iPhone 17",
    slug: "apple-iphone-17",
    category: "Smartphones",
    subcategory: "Flagship Smartphones",

    price: 899,
    oldPrice: 999,
    currency: "USD",

    rating: 4.8,
    reviews: 156,

    stock: 18,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Apple",

    images: [
      "/images/products/apple-iphone-17-1.webp",
      "/images/products/apple-iphone-17-2.webp",
      "/images/products/apple-iphone-17-3.webp",
      "/images/products/apple-iphone-17-4.webp",
      "/images/products/apple-iphone-17-5.webp",
    ],

    shortDescription:
      "A powerful flagship smartphone offering a smooth display, strong performance, and an advanced camera system.",

    description:
      "The Apple iPhone 17 combines Apple's latest mobile hardware with a refined design and a bright high-refresh-rate display. It is designed for everyday use, photography, gaming, communication, and content consumption.",

    specs: {
      processor: "Apple A19",
      ram: "8GB",
      storage: "256GB",
      display: '6.3" Super Retina XDR OLED',
      resolution: "2622 × 1206",
      refreshRate: "120Hz",
      operatingSystem: "iOS 26",
      battery: "Built-in Li-Ion",
      weight: "177 g",
    },

    colors: ["Black", "White", "Mist Blue"],

    features: [
      "6.3-inch Super Retina XDR OLED display",
      "Apple A19 chip",
      "120Hz ProMotion display",
      "Advanced dual-camera system",
      "IP68 water and dust resistance",
    ],
  },
  {
    id: 13,
    name: "Samsung Galaxy S26 Ultra",
    slug: "samsung-galaxy-s26-ultra",
    category: "Smartphones",
    subcategory: "Flagship Smartphones",

    price: 1299,
    oldPrice: 1399,
    currency: "USD",

    rating: 4.9,
    reviews: 172,

    stock: 8,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Samsung",

    images: [
      "/images/products/samsung-galaxy-s26-ultra-1.webp",
      "/images/products/samsung-galaxy-s26-ultra-2.webp",
      "/images/products/samsung-galaxy-s26-ultra-3.webp",
      "/images/products/samsung-galaxy-s26-ultra-4.webp",
      "/images/products/samsung-galaxy-s26-ultra-5.webp",
    ],

    shortDescription:
      "A premium Android flagship featuring a large high-resolution display, powerful performance, and an advanced camera system.",

    description:
      "The Samsung Galaxy S26 Ultra is designed for users who want flagship-level performance, photography, and productivity in one device. Its large AMOLED display, powerful processor, versatile camera system, and S Pen support make it suitable for demanding everyday use.",

    specs: {
      processor: "Snapdragon 8 Elite Gen 5",
      ram: "12GB",
      storage: "256GB",
      display: '6.9" Dynamic AMOLED 2X',
      resolution: "3120 × 1440",
      refreshRate: "120Hz",
      operatingSystem: "Android 16",
      battery: "5000mAh",
      weight: "218 g",
    },

    colors: ["Titanium Black", "Titanium Silver", "Titanium Blue"],

    features: [
      "6.9-inch Dynamic AMOLED 2X display",
      "Advanced multi-camera system",
      "Snapdragon flagship processor",
      "Built-in S Pen support",
      "5000mAh all-day battery",
    ],
  },
  {
    id: 14,
    name: "Samsung Galaxy S26",
    slug: "samsung-galaxy-s26",
    category: "Smartphones",
    subcategory: "Flagship Smartphones",

    price: 899,
    oldPrice: 999,
    currency: "USD",

    rating: 4.8,
    reviews: 139,

    stock: 14,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Samsung",

    images: [
      "/images/products/samsung-galaxy-s26-1.webp",
      "/images/products/samsung-galaxy-s26-2.webp",
      "/images/products/samsung-galaxy-s26-3.webp",
      "/images/products/samsung-galaxy-s26-4.webp",
      "/images/products/samsung-galaxy-s26-5.webp",
    ],

    shortDescription:
      "A compact flagship smartphone offering powerful performance, a vibrant AMOLED display, and a versatile camera system.",

    description:
      "The Samsung Galaxy S26 combines flagship performance with a compact and refined design. Its bright AMOLED display, capable camera system, and efficient hardware make it suitable for gaming, photography, productivity, and everyday use.",

    specs: {
      processor: "Snapdragon 8 Elite Gen 5",
      ram: "12GB",
      storage: "256GB",
      display: '6.3" Dynamic AMOLED 2X',
      resolution: "2340 × 1080",
      refreshRate: "120Hz",
      operatingSystem: "Android 16",
      battery: "4300mAh",
      weight: "167 g",
    },

    colors: ["Black", "Silver", "Sky Blue", "Lavender"],

    features: [
      "6.3-inch Dynamic AMOLED 2X display",
      "Flagship Snapdragon processor",
      "Advanced triple-camera system",
      "120Hz adaptive refresh rate",
      "IP68 water and dust resistance",
    ],
  },
  {
    id: 15,
    name: "Google Pixel 10 Pro",
    slug: "google-pixel-10-pro",
    category: "Smartphones",
    subcategory: "Flagship Smartphones",

    price: 999,
    oldPrice: 1099,
    currency: "USD",

    rating: 4.8,
    reviews: 121,

    stock: 11,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Google",

    images: [
      "/images/products/google-pixel-10-pro-1.webp",
      "/images/products/google-pixel-10-pro-2.webp",
      "/images/products/google-pixel-10-pro-3.webp",
      "/images/products/google-pixel-10-pro-4.webp",
      "/images/products/google-pixel-10-pro-5.webp",
    ],

    shortDescription:
      "A premium Google smartphone focused on computational photography, smooth performance, and a clean Android experience.",

    description:
      "The Google Pixel 10 Pro combines Google's latest mobile hardware with advanced computational photography and a clean Android experience. Its bright OLED display and intelligent software features make it suitable for photography, communication, productivity, and everyday use.",

    specs: {
      processor: "Google Tensor G5",
      ram: "16GB",
      storage: "256GB",
      display: '6.3" LTPO OLED',
      resolution: "2856 × 1280",
      refreshRate: "120Hz",
      operatingSystem: "Android 16",
      battery: "4870mAh",
      weight: "207 g",
    },

    colors: ["Obsidian", "Porcelain", "Moonstone"],

    features: [
      "6.3-inch LTPO OLED display",
      "Google Tensor G5 processor",
      "Advanced triple-camera system",
      "AI-powered photography features",
      "Long-term Android software support",
    ],
  },
  {
    id: 16,
    name: "Google Pixel 10",
    slug: "google-pixel-10",
    category: "Smartphones",
    subcategory: "Flagship Smartphones",

    price: 799,
    oldPrice: 899,
    currency: "USD",

    rating: 4.7,
    reviews: 108,

    stock: 17,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Google",

    images: [
      "/images/products/google-pixel-10-1.webp",
      "/images/products/google-pixel-10-2.webp",
      "/images/products/google-pixel-10-3.webp",
      "/images/products/google-pixel-10-4.webp",
      "/images/products/google-pixel-10-5.webp",
    ],

    shortDescription:
      "A clean and powerful Android smartphone with a bright display, capable cameras, and Google's latest software experience.",

    description:
      "The Google Pixel 10 combines Google's latest Tensor platform with a smooth OLED display and an advanced camera system. Its clean Android experience and intelligent software features make it suitable for everyday use, photography, gaming, and productivity.",

    specs: {
      processor: "Google Tensor G5",
      ram: "12GB",
      storage: "128GB",
      display: '6.3" OLED',
      resolution: "2424 × 1080",
      refreshRate: "120Hz",
      operatingSystem: "Android 16",
      battery: "4970mAh",
      weight: "204 g",
    },

    colors: ["Obsidian", "Frost", "Indigo"],

    features: [
      "6.3-inch OLED display",
      "Google Tensor G5 processor",
      "Advanced triple-camera system",
      "AI-powered Google features",
      "120Hz adaptive refresh rate",
    ],
  },
  {
    id: 17,
    name: "OnePlus 13",
    slug: "oneplus-13",
    category: "Smartphones",
    subcategory: "Flagship Smartphones",

    price: 899,
    oldPrice: 999,
    currency: "USD",

    rating: 4.8,
    reviews: 132,

    stock: 12,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "OnePlus",

    images: [
      "/images/products/oneplus-13-1.webp",
      "/images/products/oneplus-13-2.webp",
      "/images/products/oneplus-13-3.webp",
      "/images/products/oneplus-13-4.webp",
      "/images/products/oneplus-13-5.webp",
    ],

    shortDescription:
      "A high-performance flagship smartphone featuring a fast AMOLED display, powerful hardware, and a versatile camera system.",

    description:
      "The OnePlus 13 combines flagship-level performance with a premium design and a smooth high-refresh-rate display. Its powerful processor, large battery, and capable camera system make it suitable for gaming, photography, productivity, and everyday use.",

    specs: {
      processor: "Snapdragon 8 Elite",
      ram: "16GB",
      storage: "512GB",
      display: '6.82" LTPO AMOLED',
      resolution: "3168 × 1440",
      refreshRate: "120Hz",
      operatingSystem: "OxygenOS 15",
      battery: "6000mAh",
      weight: "210 g",
    },

    colors: ["Black Eclipse", "Midnight Blue", "Arctic Dawn"],

    features: [
      "6.82-inch LTPO AMOLED display",
      "Snapdragon 8 Elite processor",
      "Hasselblad-tuned camera system",
      "6000mAh large-capacity battery",
      "100W fast charging",
    ],
  },
  {
    id: 18,
    name: "Xiaomi 15 Ultra",
    slug: "xiaomi-15-ultra",
    category: "Smartphones",
    subcategory: "Flagship Smartphones",

    price: 1099,
    oldPrice: 1199,
    currency: "USD",

    rating: 4.8,
    reviews: 116,

    stock: 9,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Xiaomi",

    images: [
      "/images/products/xiaomi-15-ultra-1.webp",
      "/images/products/xiaomi-15-ultra-2.webp",
      "/images/products/xiaomi-15-ultra-3.webp",
      "/images/products/xiaomi-15-ultra-4.webp",
      "/images/products/xiaomi-15-ultra-5.webp",
    ],

    shortDescription:
      "A premium flagship smartphone focused on photography, powerful performance, and a high-quality display.",

    description:
      "The Xiaomi 15 Ultra combines flagship hardware with a sophisticated camera system and a large high-resolution display. It is designed for users who want strong performance, advanced photography capabilities, gaming, and a premium everyday experience.",

    specs: {
      processor: "Snapdragon 8 Elite",
      ram: "16GB",
      storage: "512GB",
      display: '6.73" LTPO AMOLED',
      resolution: "3200 × 1440",
      refreshRate: "120Hz",
      operatingSystem: "HyperOS 2",
      battery: "5410mAh",
      weight: "226 g",
    },

    colors: ["Black", "White", "Silver Chrome"],

    features: [
      "6.73-inch LTPO AMOLED display",
      "Snapdragon 8 Elite processor",
      "Leica quad-camera system",
      "120Hz adaptive refresh rate",
      "90W fast wired charging",
    ],
  },
  {
    id: 19,
    name: "Sony Xperia 1 VII",
    slug: "sony-xperia-1-vii",
    category: "Smartphones",
    subcategory: "Flagship Smartphones",

    price: 1199,
    oldPrice: 1299,
    currency: "USD",

    rating: 4.7,
    reviews: 84,

    stock: 7,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Sony",

    images: [
      "/images/products/sony-xperia-1-vii-1.webp",
      "/images/products/sony-xperia-1-vii-2.webp",
      "/images/products/sony-xperia-1-vii-3.webp",
      "/images/products/sony-xperia-1-vii-4.webp",
      "/images/products/sony-xperia-1-vii-5.webp",
    ],

    shortDescription:
      "A premium Sony smartphone focused on display quality, photography, audio, and a refined multimedia experience.",

    description:
      "The Sony Xperia 1 VII combines a high-quality display with powerful hardware and Sony's multimedia-focused features. Its advanced camera system, strong audio capabilities, and expandable storage make it suitable for photography, entertainment, and everyday productivity.",

    specs: {
      processor: "Snapdragon 8 Elite",
      ram: "12GB",
      storage: "256GB",
      display: '6.5" OLED',
      resolution: "2340 × 1080",
      refreshRate: "120Hz",
      operatingSystem: "Android 15",
      battery: "5000mAh",
      weight: "197 g",
    },

    colors: ["Black", "Khaki Green", "Orchid Purple"],

    features: [
      "6.5-inch OLED display",
      "Snapdragon 8 Elite processor",
      "Advanced triple-camera system",
      "High-quality stereo speakers",
      "microSD card support",
    ],
  },
  {
    id: 20,
    name: "Nothing Phone (3)",
    slug: "nothing-phone-3",
    category: "Smartphones",
    subcategory: "Flagship Smartphones",

    price: 799,
    oldPrice: 899,
    currency: "USD",

    rating: 4.7,
    reviews: 97,

    stock: 13,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Nothing",

    images: [
      "/images/products/nothing-phone-3-1.webp",
      "/images/products/nothing-phone-3-2.webp",
      "/images/products/nothing-phone-3-3.webp",
      "/images/products/nothing-phone-3-4.webp",
      "/images/products/nothing-phone-3-5.webp",
    ],

    shortDescription:
      "A distinctive flagship smartphone combining a unique transparent-inspired design with powerful hardware and a smooth display.",

    description:
      "The Nothing Phone (3) combines a distinctive minimalist design with powerful hardware and a smooth high-refresh-rate display. It is designed for users who want strong everyday performance, capable cameras, and a unique smartphone experience.",

    specs: {
      processor: "Snapdragon 8s Gen 4",
      ram: "12GB",
      storage: "256GB",
      display: '6.77" AMOLED',
      resolution: "2392 × 1080",
      refreshRate: "120Hz",
      operatingSystem: "Nothing OS 3.5",
      battery: "5150mAh",
      weight: "218 g",
    },

    colors: ["Black", "White"],

    features: [
      "6.77-inch AMOLED display",
      "Snapdragon 8s Gen 4 processor",
      "Advanced multi-camera system",
      "120Hz adaptive refresh rate",
      "Distinctive transparent-inspired design",
    ],
  },
  {
    id: 21,
    name: "PlayStation 5 Slim",
    slug: "playstation-5-slim",
    category: "Gaming",
    subcategory: "Gaming Consoles",

    price: 499,
    oldPrice: 549,
    currency: "USD",

    rating: 4.9,
    reviews: 231,

    stock: 18,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Sony",

    images: [
      "/images/products/playstation-5-slim-1.webp",
      "/images/products/playstation-5-slim-2.webp",
      "/images/products/playstation-5-slim-3.webp",
      "/images/products/playstation-5-slim-4.webp",
      "/images/products/playstation-5-slim-5.webp",
    ],

    shortDescription:
      "A compact next-generation gaming console offering fast performance, immersive graphics, and a large library of games.",

    description:
      "The PlayStation 5 Slim delivers next-generation gaming performance in a more compact design. With fast SSD storage, high-quality graphics, and support for immersive features such as ray tracing and 3D audio, it is designed for modern console gaming.",

    specs: {
      processor: "AMD Zen 2 8-Core CPU",
      gpu: "AMD RDNA 2 Custom GPU",
      ram: "16GB GDDR6",
      storage: "1TB Custom SSD",
      display: "Up to 4K",
      resolution: "3840 × 2160",
      refreshRate: "Up to 120Hz",
      operatingSystem: "PlayStation OS",
      battery: "N/A",
      weight: "3.2 kg",
    },

    colors: ["White"],

    features: [
      "1TB high-speed SSD",
      "Up to 4K gaming",
      "Ray tracing support",
      "120Hz gaming support",
      "3D Tempest audio technology",
    ],
  },
  {
    id: 22,
    name: "PlayStation 5 Pro",
    slug: "playstation-5-pro",
    category: "Gaming",
    subcategory: "Gaming Consoles",

    price: 699,
    oldPrice: 749,
    currency: "USD",

    rating: 4.9,
    reviews: 187,

    stock: 9,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Sony",

    images: [
      "/images/products/playstation-5-pro-1.webp",
      "/images/products/playstation-5-pro-2.webp",
      "/images/products/playstation-5-pro-3.webp",
      "/images/products/playstation-5-pro-4.webp",
      "/images/products/playstation-5-pro-5.webp",
    ],

    shortDescription:
      "A high-performance PlayStation console designed for enhanced graphics, smoother gameplay, and demanding next-generation gaming.",

    description:
      "The PlayStation 5 Pro is built for gamers who want enhanced visual quality and higher performance in supported games. Its upgraded graphics hardware, fast SSD storage, and advanced rendering technologies provide a more detailed and responsive gaming experience.",

    specs: {
      processor: "AMD Zen 2 8-Core CPU",
      gpu: "AMD RDNA 2 Custom GPU",
      ram: "16GB GDDR6 + 2GB DDR5",
      storage: "2TB Custom SSD",
      display: "Up to 8K",
      resolution: "Up to 8K",
      refreshRate: "Up to 120Hz",
      operatingSystem: "PlayStation OS",
      battery: "N/A",
      weight: "3.1 kg",
    },

    colors: ["White"],

    features: [
      "2TB high-speed SSD",
      "Enhanced ray tracing",
      "AI-powered PSSR upscaling",
      "8K output support",
      "Improved GPU performance",
    ],
  },
  {
    id: 23,
    name: "Xbox Series X",
    slug: "xbox-series-x",
    category: "Gaming",
    subcategory: "Gaming Consoles",

    price: 499,
    oldPrice: 549,
    currency: "USD",

    rating: 4.8,
    reviews: 198,

    stock: 11,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Microsoft",

    images: [
      "/images/products/xbox-series-x-1.webp",
      "/images/products/xbox-series-x-2.webp",
      "/images/products/xbox-series-x-3.webp",
      "/images/products/xbox-series-x-4.webp",
      "/images/products/xbox-series-x-5.webp",
    ],

    shortDescription:
      "A powerful next-generation gaming console built for high-resolution gaming, fast loading times, and smooth performance.",

    description:
      "The Xbox Series X delivers high-performance console gaming with fast SSD storage, powerful graphics hardware, and support for high-resolution gameplay. It is designed for demanding games while providing quick loading and a smooth gaming experience.",

    specs: {
      processor: "AMD Zen 2 8-Core CPU",
      gpu: "AMD RDNA 2 Custom GPU",
      ram: "16GB GDDR6",
      storage: "1TB NVMe SSD",
      display: "Up to 4K",
      resolution: "3840 × 2160",
      refreshRate: "Up to 120Hz",
      operatingSystem: "Xbox OS",
      battery: "N/A",
      weight: "4.45 kg",
    },

    colors: ["Carbon Black"],

    features: [
      "1TB high-speed NVMe SSD",
      "Native 4K gaming",
      "Up to 120 FPS support",
      "Hardware-accelerated ray tracing",
      "Quick Resume support",
    ],
  },
  {
    id: 24,
    name: "Xbox Series S",
    slug: "xbox-series-s",
    category: "Gaming",
    subcategory: "Gaming Consoles",

    price: 299,
    oldPrice: 349,
    currency: "USD",

    rating: 4.7,
    reviews: 164,

    stock: 16,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Microsoft",

    images: [
      "/images/products/xbox-series-s-1.webp",
      "/images/products/xbox-series-s-2.webp",
      "/images/products/xbox-series-s-3.webp",
      "/images/products/xbox-series-s-4.webp",
      "/images/products/xbox-series-s-5.webp",
    ],

    shortDescription:
      "A compact all-digital gaming console designed for smooth next-generation gaming at an accessible price.",

    description:
      "The Xbox Series S offers next-generation gaming performance in a compact and minimalist design. With fast SSD storage, digital game support, and high-frame-rate capabilities, it is designed for players who want a smaller console without sacrificing smooth gameplay.",

    specs: {
      processor: "AMD Zen 2 8-Core CPU",
      gpu: "AMD RDNA 2 Custom GPU",
      ram: "10GB GDDR6",
      storage: "512GB NVMe SSD",
      display: "Up to 1440p",
      resolution: "2560 × 1440",
      refreshRate: "Up to 120Hz",
      operatingSystem: "Xbox OS",
      battery: "N/A",
      weight: "1.93 kg",
    },

    colors: ["Robot White"],

    features: [
      "512GB high-speed SSD",
      "All-digital gaming",
      "Up to 120 FPS support",
      "Compact and lightweight design",
      "Quick Resume support",
    ],
  },
  {
    id: 25,
    name: "Nintendo Switch 2",
    slug: "nintendo-switch-2",
    category: "Gaming",
    subcategory: "Gaming Consoles",

    price: 449,
    oldPrice: 499,
    currency: "USD",

    rating: 4.8,
    reviews: 143,

    stock: 14,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Nintendo",

    images: [
      "/images/products/nintendo-switch-2-1.webp",
      "/images/products/nintendo-switch-2-2.webp",
      "/images/products/nintendo-switch-2-3.webp",
      "/images/products/nintendo-switch-2-4.webp",
      "/images/products/nintendo-switch-2-5.webp",
    ],

    shortDescription:
      "A versatile next-generation gaming console designed for both handheld and home gaming with improved performance.",

    description:
      "The Nintendo Switch 2 combines portable and home console gaming in a refined hybrid design. It offers improved graphics performance, a larger high-quality display, and enhanced Joy-Con controllers for a flexible gaming experience at home or on the go.",

    specs: {
      processor: "Custom NVIDIA Processor",
      gpu: "Custom NVIDIA GPU",
      ram: "12GB LPDDR5X",
      storage: "256GB Internal Storage",
      display: '7.9" LCD',
      resolution: "1920 × 1080",
      refreshRate: "120Hz",
      operatingSystem: "Nintendo Switch System Software",
      battery: "5220mAh",
      weight: "534 g",
    },

    colors: ["Black"],

    features: [
      "7.9-inch 1080p LCD display",
      "Handheld and docked gaming modes",
      "Improved Joy-Con 2 controllers",
      "Up to 120Hz refresh rate",
      "256GB internal storage",
    ],
  },
  {
    id: 26,
    name: "Steam Deck OLED",
    slug: "steam-deck-oled",
    category: "Gaming",
    subcategory: "Handheld Consoles",

    price: 549,
    oldPrice: 599,
    currency: "USD",

    rating: 4.8,
    reviews: 176,

    stock: 12,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Valve",

    images: [
      "/images/products/steam-deck-oled-1.webp",
      "/images/products/steam-deck-oled-2.webp",
      "/images/products/steam-deck-oled-3.webp",
      "/images/products/steam-deck-oled-4.webp",
      "/images/products/steam-deck-oled-5.webp",
    ],

    shortDescription:
      "A powerful handheld gaming PC featuring a vibrant OLED display and access to a large library of PC games.",

    description:
      "The Steam Deck OLED brings PC gaming into a portable handheld form factor. Its OLED display, efficient hardware, fast storage, and SteamOS experience make it suitable for playing a wide range of PC games on the go.",

    specs: {
      processor: "AMD Zen 2 4-Core CPU",
      gpu: "AMD RDNA 2 8-CU GPU",
      ram: "16GB LPDDR5",
      storage: "512GB NVMe SSD",
      display: '7.4" HDR OLED',
      resolution: "1280 × 800",
      refreshRate: "90Hz",
      operatingSystem: "SteamOS",
      battery: "50Wh",
      weight: "640 g",
    },

    colors: ["Black"],

    features: [
      "7.4-inch HDR OLED display",
      "90Hz refresh rate",
      "High-speed NVMe SSD",
      "SteamOS gaming experience",
      "Expandable microSD storage",
    ],
  },
  {
    id: 27,
    name: "ASUS ROG Ally X",
    slug: "asus-rog-ally-x",
    category: "Gaming",
    subcategory: "Handheld Consoles",

    price: 799,
    oldPrice: 849,
    currency: "USD",

    rating: 4.8,
    reviews: 129,

    stock: 10,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "ASUS",

    images: [
      "/images/products/asus-rog-ally-x-1.webp",
      "/images/products/asus-rog-ally-x-2.webp",
      "/images/products/asus-rog-ally-x-3.webp",
      "/images/products/asus-rog-ally-x-4.webp",
      "/images/products/asus-rog-ally-x-5.webp",
    ],

    shortDescription:
      "A powerful Windows-based handheld gaming PC designed for portable high-performance gaming.",

    description:
      "The ASUS ROG Ally X combines PC gaming performance with a portable handheld design. Its powerful AMD processor, improved battery capacity, fast storage, and high-refresh-rate display make it suitable for demanding games while traveling or gaming away from a desktop.",

    specs: {
      processor: "AMD Ryzen Z1 Extreme",
      gpu: "AMD Radeon RDNA 3",
      ram: "24GB LPDDR5X",
      storage: "1TB PCIe 4.0 NVMe SSD",
      display: '7" IPS',
      resolution: "1920 × 1080",
      refreshRate: "120Hz",
      operatingSystem: "Windows 11 Home",
      battery: "80Wh",
      weight: "678 g",
    },

    colors: ["Black"],

    features: [
      "7-inch 120Hz Full HD display",
      "AMD Ryzen Z1 Extreme processor",
      "24GB LPDDR5X memory",
      "80Wh high-capacity battery",
      "1TB NVMe SSD",
    ],
  },
  {
    id: 28,
    name: "PlayStation Portal",
    slug: "playstation-portal",
    category: "Gaming",
    subcategory: "Handheld Gaming Devices",

    price: 199,
    oldPrice: 219,
    currency: "USD",

    rating: 4.6,
    reviews: 113,

    stock: 15,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Sony",

    images: [
      "/images/products/playstation-portal-1.webp",
      "/images/products/playstation-portal-2.webp",
      "/images/products/playstation-portal-3.webp",
      "/images/products/playstation-portal-4.webp",
      "/images/products/playstation-portal-5.webp",
    ],

    shortDescription:
      "A dedicated handheld device designed for streaming compatible PlayStation 5 games through Remote Play.",

    description:
      "The PlayStation Portal provides a convenient way to play compatible PS5 games remotely through a dedicated handheld interface. Its large Full HD display and integrated DualSense-style controls are designed to deliver a familiar PlayStation experience away from the TV.",

    specs: {
      processor: "Custom PlayStation Hardware",
      gpu: "Integrated Graphics",
      ram: "4GB",
      storage: "Internal System Storage",
      display: '8" LCD',
      resolution: "1920 × 1080",
      refreshRate: "60Hz",
      operatingSystem: "PlayStation System Software",
      battery: "Built-in Battery",
      weight: "529 g",
    },

    colors: ["White"],

    features: [
      "8-inch Full HD display",
      "1080p resolution",
      "60Hz refresh rate",
      "Integrated DualSense-style controls",
      "PS5 Remote Play support",
    ],
  },
  {
    id: 29,
    name: "Meta Quest 3",
    slug: "meta-quest-3",
    category: "Gaming",
    subcategory: "VR Headsets",

    price: 499,
    oldPrice: 549,
    currency: "USD",

    rating: 4.8,
    reviews: 154,

    stock: 10,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Meta",

    images: [
      "/images/products/meta-quest-3-1.webp",
      "/images/products/meta-quest-3-2.webp",
      "/images/products/meta-quest-3-3.webp",
      "/images/products/meta-quest-3-4.webp",
      "/images/products/meta-quest-3-5.webp",
    ],

    shortDescription:
      "An advanced standalone VR headset offering immersive virtual reality gaming, mixed reality, and interactive experiences.",

    description:
      "The Meta Quest 3 is a standalone virtual reality headset designed for immersive gaming, entertainment, and mixed-reality experiences. Its improved display, powerful XR hardware, and inside-out tracking allow users to explore virtual environments without requiring a dedicated gaming PC.",

    specs: {
      processor: "Qualcomm Snapdragon XR2 Gen 2",
      gpu: "Adreno Integrated GPU",
      ram: "8GB",
      storage: "512GB",
      display: "LCD VR Display",
      resolution: "2064 × 2208 per eye",
      refreshRate: "120Hz",
      operatingSystem: "Meta Horizon OS",
      battery: "5060mAh",
      weight: "515 g",
    },

    colors: ["White"],

    features: [
      "High-resolution VR display",
      "Qualcomm Snapdragon XR2 Gen 2",
      "Inside-out positional tracking",
      "Mixed reality passthrough",
      "Standalone wireless VR gaming",
    ],
  },
  {
    id: 30,
    name: "Nintendo Switch OLED",
    slug: "nintendo-switch-oled",
    category: "Gaming",
    subcategory: "Gaming Consoles",

    price: 349,
    oldPrice: 399,
    currency: "USD",

    rating: 4.8,
    reviews: 207,

    stock: 19,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Nintendo",

    images: [
      "/images/products/nintendo-switch-oled-1.webp",
      "/images/products/nintendo-switch-oled-2.webp",
      "/images/products/nintendo-switch-oled-3.webp",
      "/images/products/nintendo-switch-oled-4.webp",
      "/images/products/nintendo-switch-oled-5.webp",
    ],

    shortDescription:
      "A versatile hybrid gaming console featuring a vibrant OLED display and flexible handheld, tabletop, and TV gaming modes.",

    description:
      "The Nintendo Switch OLED combines portable and home gaming in a flexible hybrid console. Its vibrant OLED display, improved kickstand, enhanced audio, and expanded internal storage provide a refined experience for gaming at home or on the go.",

    specs: {
      processor: "NVIDIA Custom Tegra Processor",
      gpu: "NVIDIA Custom GPU",
      ram: "4GB LPDDR4",
      storage: "64GB Internal Storage",
      display: '7" OLED',
      resolution: "1280 × 720",
      refreshRate: "60Hz",
      operatingSystem: "Nintendo Switch System Software",
      battery: "4310mAh",
      weight: "420 g",
    },

    colors: ["White", "Neon Blue / Neon Red"],

    features: [
      "7-inch OLED display",
      "Handheld, tabletop, and TV modes",
      "64GB internal storage",
      "Enhanced audio in handheld mode",
      "Adjustable wide kickstand",
    ],
  },
  {
    id: 31,
    name: "Apple AirPods Pro 3",
    slug: "apple-airpods-pro-3",
    category: "Accessories",
    subcategory: "Wireless Earbuds",

    price: 249,
    oldPrice: 279,
    currency: "USD",

    rating: 4.8,
    reviews: 189,

    stock: 22,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Apple",

    images: [
      "/images/products/apple-airpods-pro-3-1.webp",
      "/images/products/apple-airpods-pro-3-2.webp",
      "/images/products/apple-airpods-pro-3-3.webp",
      "/images/products/apple-airpods-pro-3-4.webp",
      "/images/products/apple-airpods-pro-3-5.webp",
    ],

    shortDescription:
      "Premium wireless earbuds featuring active noise cancellation, immersive audio, and seamless integration with Apple devices.",

    description:
      "The Apple AirPods Pro 3 are designed to provide a premium wireless listening experience with active noise cancellation, adaptive audio, and a compact in-ear design. They offer seamless connectivity with Apple devices and are suitable for music, calls, travel, and everyday use.",

    specs: {
      connectivity: "Bluetooth 5.4",
      driver: "Custom High-Excursion Driver",
      noiseCancellation: "Active Noise Cancellation",
      batteryLife: "Up to 6 hours",
      chargingCase: "MagSafe Charging Case",
      charging: "USB-C / MagSafe",
      waterResistance: "IP57",
      compatibility: "Apple Devices / Bluetooth",
      weight: "Approx. 5.5 g per earbud",
    },

    colors: ["White"],

    features: [
      "Active Noise Cancellation",
      "Adaptive Audio",
      "Transparency Mode",
      "Spatial Audio with Dynamic Head Tracking",
      "MagSafe charging case",
    ],
  },
  {
    id: 32,
    name: "Sony WH-1000XM6",
    slug: "sony-wh-1000xm6",
    category: "Accessories",
    subcategory: "Wireless Headphones",

    price: 449,
    oldPrice: 499,
    currency: "USD",

    rating: 4.9,
    reviews: 176,

    stock: 14,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Sony",

    images: [
      "/images/products/sony-wh-1000xm6-1.webp",
      "/images/products/sony-wh-1000xm6-2.webp",
      "/images/products/sony-wh-1000xm6-3.webp",
      "/images/products/sony-wh-1000xm6-4.webp",
      "/images/products/sony-wh-1000xm6-5.webp",
    ],

    shortDescription:
      "Premium wireless over-ear headphones designed for immersive sound, powerful noise cancellation, and long listening sessions.",

    description:
      "The Sony WH-1000XM6 combines high-quality audio with advanced active noise cancellation and a comfortable over-ear design. It is designed for music, travel, work, and everyday listening while providing a refined wireless audio experience.",

    specs: {
      connectivity: "Bluetooth 5.3",
      driver: "30mm Dynamic Driver",
      noiseCancellation: "Advanced Active Noise Cancellation",
      batteryLife: "Up to 30 hours",
      chargingCase: "Carrying Case",
      charging: "USB-C",
      waterResistance: "No official IP rating",
      compatibility: "Android / iOS / Windows / macOS",
      weight: "254 g",
    },

    colors: ["Black", "Silver"],

    features: [
      "Advanced active noise cancellation",
      "High-resolution wireless audio",
      "Adaptive Sound Control",
      "Multipoint Bluetooth connection",
      "Up to 30 hours of battery life",
    ],
  },
  {
    id: 33,
    name: "Apple Magic Keyboard",
    slug: "apple-magic-keyboard",
    category: "Accessories",
    subcategory: "Keyboards",

    price: 99,
    oldPrice: 109,
    currency: "USD",

    rating: 4.7,
    reviews: 142,

    stock: 24,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Apple",

    images: [
      "/images/products/apple-magic-keyboard-1.webp",
      "/images/products/apple-magic-keyboard-2.webp",
      "/images/products/apple-magic-keyboard-3.webp",
      "/images/products/apple-magic-keyboard-4.webp",
      "/images/products/apple-magic-keyboard-5.webp",
    ],

    shortDescription:
      "A slim wireless keyboard featuring a minimalist design, comfortable typing experience, and seamless Apple device integration.",

    description:
      "The Apple Magic Keyboard combines a slim minimalist design with a comfortable and responsive typing experience. Its wireless connectivity and rechargeable battery make it suitable for desks, offices, and everyday productivity with compatible Apple devices.",

    specs: {
      connectivity: "Bluetooth",
      layout: "Full-Size Keyboard",
      switches: "Scissor Mechanism",
      batteryLife: "Up to 1 Month",
      chargingCase: "N/A",
      charging: "USB-C",
      compatibility: "macOS / iPadOS / iOS",
      dimensions: "43.0 × 11.5 × 1.1 cm",
      weight: "239 g",
    },

    colors: ["White", "Black"],

    features: [
      "Slim minimalist design",
      "Wireless Bluetooth connectivity",
      "Rechargeable battery",
      "Scissor-switch keys",
      "USB-C charging",
    ],
  },
  {
    id: 34,
    name: "Logitech MX Master 4",
    slug: "logitech-mx-master-4",
    category: "Accessories",
    subcategory: "Wireless Mice",

    price: 119,
    oldPrice: 129,
    currency: "USD",

    rating: 4.8,
    reviews: 158,

    stock: 20,
    inStock: true,
    onSale: true,
    isNew: true,

    brand: "Logitech",

    images: [
      "/images/products/logitech-mx-master-4-1.webp",
      "/images/products/logitech-mx-master-4-2.webp",
      "/images/products/logitech-mx-master-4-3.webp",
      "/images/products/logitech-mx-master-4-4.webp",
      "/images/products/logitech-mx-master-4-5.webp",
    ],

    shortDescription:
      "A premium wireless productivity mouse designed for precise control, comfortable long-term use, and multi-device workflows.",

    description:
      "The Logitech MX Master 4 is designed for professionals and productivity-focused users who need precise control and a comfortable ergonomic shape. Its advanced tracking, customizable controls, and multi-device connectivity make it suitable for demanding desktop workflows.",

    specs: {
      connectivity: "Bluetooth / USB Receiver",
      sensor: "High-Precision Optical Sensor",
      dpi: "Up to 8000 DPI",
      buttons: "7 Programmable Buttons",
      batteryLife: "Up to 70 Days",
      chargingCase: "N/A",
      charging: "USB-C",
      compatibility: "Windows / macOS / Linux",
      weight: "150 g",
    },

    colors: ["Graphite", "Pale Gray"],

    features: [
      "High-precision optical tracking",
      "Ergonomic thumb-rest design",
      "Multi-device connectivity",
      "Customizable buttons",
      "USB-C fast charging",
    ],
  },
  {
    id: 35,
    name: "Logitech G PRO X SUPERLIGHT 2",
    slug: "logitech-g-pro-x-superlight-2",
    category: "Accessories",
    subcategory: "Gaming Mice",

    price: 159,
    oldPrice: 179,
    currency: "USD",

    rating: 4.9,
    reviews: 214,

    stock: 17,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Logitech",

    images: [
      "/images/products/logitech-g-pro-x-superlight-2-1.webp",
      "/images/products/logitech-g-pro-x-superlight-2-2.webp",
      "/images/products/logitech-g-pro-x-superlight-2-3.webp",
      "/images/products/logitech-g-pro-x-superlight-2-4.webp",
      "/images/products/logitech-g-pro-x-superlight-2-5.webp",
    ],

    shortDescription:
      "An ultra-lightweight wireless gaming mouse designed for competitive gaming with precise tracking and responsive controls.",

    description:
      "The Logitech G PRO X SUPERLIGHT 2 is built for competitive gamers who want a lightweight and responsive mouse. Its high-precision sensor, low-latency wireless connection, and ergonomic shape provide reliable control during fast-paced gaming.",

    specs: {
      connectivity: "LIGHTSPEED Wireless / USB",
      sensor: "HERO 2 Optical Sensor",
      dpi: "Up to 32000 DPI",
      buttons: "5 Programmable Buttons",
      batteryLife: "Up to 95 Hours",
      chargingCase: "N/A",
      charging: "USB-C",
      compatibility: "Windows / macOS",
      weight: "60 g",
    },

    colors: ["Black", "White", "Magenta"],

    features: [
      "Ultra-lightweight 60g design",
      "HERO 2 high-precision sensor",
      "LIGHTSPEED wireless technology",
      "USB-C charging",
      "Up to 32,000 DPI tracking",
    ],
  },
  {
    id: 36,
    name: "Logitech MX Keys S",
    slug: "logitech-mx-keys-s",
    category: "Accessories",
    subcategory: "Keyboards",

    price: 109,
    oldPrice: 119,
    currency: "USD",

    rating: 4.8,
    reviews: 167,

    stock: 21,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Logitech",

    images: [
      "/images/products/logitech-mx-keys-s-1.webp",
      "/images/products/logitech-mx-keys-s-2.webp",
      "/images/products/logitech-mx-keys-s-3.webp",
      "/images/products/logitech-mx-keys-s-4.webp",
      "/images/products/logitech-mx-keys-s-5.webp",
    ],

    shortDescription:
      "A premium wireless keyboard designed for comfortable typing, quiet operation, and efficient multi-device workflows.",

    description:
      "The Logitech MX Keys S is a low-profile wireless keyboard designed for productivity and comfortable long typing sessions. Its smart backlighting, quiet keys, and multi-device connectivity make it suitable for work, programming, and everyday use.",

    specs: {
      connectivity: "Bluetooth / Logi Bolt",
      layout: "Full-Size Keyboard",
      switches: "Low-Profile Scissor Keys",
      batteryLife: "Up to 5 Months",
      chargingCase: "N/A",
      charging: "USB-C",
      compatibility: "Windows / macOS / Linux",
      dimensions: "43.0 × 13.2 × 2.1 cm",
      weight: "810 g",
    },

    colors: ["Graphite", "Pale Gray"],

    features: [
      "Smart backlighting",
      "Low-profile quiet keys",
      "Multi-device connectivity",
      "USB-C rechargeable battery",
      "Logi Options+ customization",
    ],
  },
  {
    id: 37,
    name: "Samsung T7 Shield Portable SSD",
    slug: "samsung-t7-shield-portable-ssd",
    category: "Accessories",
    subcategory: "Portable SSDs",

    price: 129,
    oldPrice: 149,
    currency: "USD",

    rating: 4.8,
    reviews: 153,

    stock: 18,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Samsung",

    images: [
      "/images/products/samsung-t7-shield-portable-ssd-1.webp",
      "/images/products/samsung-t7-shield-portable-ssd-2.webp",
      "/images/products/samsung-t7-shield-portable-ssd-3.webp",
      "/images/products/samsung-t7-shield-portable-ssd-4.webp",
      "/images/products/samsung-t7-shield-portable-ssd-5.webp",
    ],

    shortDescription:
      "A durable portable SSD offering fast data transfer speeds, compact storage, and enhanced protection for everyday use.",

    description:
      "The Samsung T7 Shield Portable SSD is designed for users who need fast and reliable portable storage. Its compact and rugged design provides enhanced resistance to dust, water, and accidental drops, making it suitable for work, travel, and content creation.",

    specs: {
      interface: "USB 3.2 Gen 2",
      capacity: "1TB",
      readSpeed: "Up to 1050 MB/s",
      writeSpeed: "Up to 1000 MB/s",
      encryption: "AES 256-bit Hardware Encryption",
      waterResistance: "IP65",
      compatibility: "Windows / macOS / Android",
      dimensions: "88 × 59 × 13 mm",
      weight: "98 g",
    },

    colors: ["Black", "Blue", "Beige"],

    features: [
      "Up to 1050 MB/s read speed",
      "IP65 water and dust resistance",
      "Rugged shock-resistant design",
      "AES 256-bit hardware encryption",
      "Compact portable form factor",
    ],
  },
  {
    id: 38,
    name: "Anker 737 Power Bank",
    slug: "anker-737-power-bank",
    category: "Accessories",
    subcategory: "Power Banks",

    price: 149,
    oldPrice: 169,
    currency: "USD",

    rating: 4.8,
    reviews: 136,

    stock: 16,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Anker",

    images: [
      "/images/products/anker-737-power-bank-1.webp",
      "/images/products/anker-737-power-bank-2.webp",
      "/images/products/anker-737-power-bank-3.webp",
      "/images/products/anker-737-power-bank-4.webp",
      "/images/products/anker-737-power-bank-5.webp",
    ],

    shortDescription:
      "A high-capacity portable power bank designed for fast charging laptops, smartphones, tablets, and other devices.",

    description:
      "The Anker 737 Power Bank provides high-capacity portable power with fast charging support for a wide range of devices. Its digital display provides useful charging information, while its compact design makes it suitable for travel and everyday use.",

    specs: {
      capacity: "24000mAh",
      outputPower: "140W",
      inputPower: "140W",
      ports: "2 × USB-C + 1 × USB-A",
      display: "Digital Display",
      charging: "USB-C",
      compatibility: "Smartphones / Tablets / Laptops",
      dimensions: "155 × 55 × 49 mm",
      weight: "630 g",
    },

    colors: ["Black"],

    features: [
      "24,000mAh high capacity",
      "Up to 140W fast charging",
      "Smart digital display",
      "Multiple charging ports",
      "Laptop and smartphone compatibility",
    ],
  },
  {
    id: 39,
    name: "Belkin BoostCharge Pro 2-in-1",
    slug: "belkin-boostcharge-pro-2-in-1",
    category: "Accessories",
    subcategory: "Wireless Chargers",

    price: 99,
    oldPrice: 119,
    currency: "USD",

    rating: 4.7,
    reviews: 128,

    stock: 19,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Belkin",

    images: [
      "/images/products/belkin-boostcharge-pro-2-in-1-1.webp",
      "/images/products/belkin-boostcharge-pro-2-in-1-2.webp",
      "/images/products/belkin-boostcharge-pro-2-in-1-3.webp",
      "/images/products/belkin-boostcharge-pro-2-in-1-4.webp",
      "/images/products/belkin-boostcharge-pro-2-in-1-5.webp",
    ],

    shortDescription:
      "A compact 2-in-1 wireless charging station designed to power compatible smartphones and wireless earbuds simultaneously.",

    description:
      "The Belkin BoostCharge Pro 2-in-1 provides a convenient charging solution for compatible smartphones and wireless earbuds. Its compact design helps keep a desk or nightstand organized while delivering fast and reliable wireless charging.",

    specs: {
      chargingPower: "Up to 15W",
      chargingType: "Wireless",
      chargingSpots: "2 Devices",
      compatibility: "Qi2 / MagSafe Compatible Devices",
      input: "USB-C",
      powerAdapter: "Included",
      protection: "Overcurrent / Overvoltage Protection",
      dimensions: "Approx. 15 × 7 × 12 cm",
      weight: "Approx. 500 g",
    },

    colors: ["Black", "White"],

    features: [
      "2-in-1 wireless charging",
      "Qi2 wireless charging support",
      "Fast wireless charging",
      "Compact space-saving design",
      "Built-in device protection",
    ],
  },
  {
    id: 40,
    name: "Elgato Stream Deck MK.2",
    slug: "elgato-stream-deck-mk-2",
    category: "Accessories",
    subcategory: "Streaming Accessories",

    price: 149,
    oldPrice: 169,
    currency: "USD",

    rating: 4.8,
    reviews: 141,

    stock: 15,
    inStock: true,
    onSale: true,
    isNew: false,

    brand: "Elgato",

    images: [
      "/images/products/elgato-stream-deck-mk-2-1.webp",
      "/images/products/elgato-stream-deck-mk-2-2.webp",
      "/images/products/elgato-stream-deck-mk-2-3.webp",
      "/images/products/elgato-stream-deck-mk-2-4.webp",
      "/images/products/elgato-stream-deck-mk-2-5.webp",
    ],

    shortDescription:
      "A customizable control pad with programmable LCD keys designed for streaming, content creation, and productivity workflows.",

    description:
      "The Elgato Stream Deck MK.2 provides a convenient way to control applications, shortcuts, media, and streaming tools through customizable LCD keys. It is designed for streamers, content creators, and users who want quick access to frequently used actions.",

    specs: {
      connectivity: "USB-C",
      keys: "15 Customizable LCD Keys",
      display: "Individual LCD Key Displays",
      software: "Elgato Stream Deck Software",
      compatibility: "Windows / macOS",
      profiles: "Custom Profiles",
      interface: "USB",
      dimensions: "118 × 84 × 25 mm",
      weight: "145 g",
    },

    colors: ["Black", "White"],

    features: [
      "15 customizable LCD keys",
      "Drag-and-drop customization",
      "Multi-action shortcuts",
      "Custom icons and profiles",
      "Streaming and productivity controls",
    ],
  },
];
