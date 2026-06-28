import { MenuItem, FasilitasItem, GalleryItem, InstagramPost } from "./types";

import baristaTeam from "./assets/images/barista_team_1782629570948.jpg";
import coffeeGravel from "./assets/images/coffee_gravel_1782629589406.jpg";
import outdoorSeating from "./assets/images/outdoor_seating_1782629603170.jpg";
import storefront from "./assets/images/storefront_1782629616404.jpg";
import outdoorSign from "./assets/images/outdoor_sign_1782629627413.jpg";

export { baristaTeam, coffeeGravel, outdoorSeating, storefront, outdoorSign };

export const STATS = [
  { value: "★★★★★", label: "Rating Google" },
  { value: "1,000+", label: "Pelanggan / Bulan" },
  { value: "7 Hari", label: "Buka Setiap Hari" },
  { value: "Coffee • Eatery • Hangout", label: "Konsep Utama" },
];

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: "c1",
    name: "Kopi Susu Aren LOCSO",
    description: "Signature single-origin Solok espresso, susu segar creamy, gula aren organik, aroma pandan harum.",
    price: "Rp 24.000",
    category: "Coffee",
    imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    tag: "Signature",
    isPopular: true,
  },
  {
    id: "c2",
    name: "V60 Manual Brew Solok Radjo",
    description: "Kopi filter premium menggunakan biji lokal Solok Radjo. Rasa bersih dengan sentuhan jeruk lemon, madu, dan teh melati.",
    price: "Rp 26.000",
    category: "Coffee",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    tag: "Premium",
    isPopular: true,
  },
  {
    id: "c3",
    name: "Espresso On-The-Rock",
    description: "Double shot espresso arabika Solok madu, dituangkan di atas es batu bulat kristal premium untuk menjaga kestabilan rasa.",
    price: "Rp 20.000",
    category: "Coffee",
    imageUrl: "https://images.unsplash.com/photo-1510707513156-476725f37722?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "c4",
    name: "Classic Flat White",
    description: "Double ristretto dengan susu hangat berbusa tipis (microfoam) halus, menghasilkan rasa kopi yang manis dan pekat.",
    price: "Rp 25.000",
    category: "Coffee",
    imageUrl: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop",
  },

  // NON COFFEE
  {
    id: "nc1",
    name: "Ceremonial Uji Matcha Latte",
    description: "Matcha murni impor dari Uji, Kyoto Jepang, diseduh secara tradisional, dipadu dengan susu segar hangat yang manis alami.",
    price: "Rp 28.000",
    category: "Non Coffee",
    imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop",
    tag: "Favorite",
    isPopular: true,
  },
  {
    id: "nc2",
    name: "Solok Honey Peach Tea",
    description: "Seduhan teh hitam pilihan berpadu dengan sirup nektar peach manis dan madu hutan alami pegunungan Solok.",
    price: "Rp 22.000",
    category: "Non Coffee",
    imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "nc3",
    name: "Chilled Charcoal Velvet",
    description: "Bubuk arang bambu aktif dipadu dengan cokelat hitam pekat premium dan susu vanila dingin bertekstur beludru.",
    price: "Rp 26.000",
    category: "Non Coffee",
    imageUrl: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=800&auto=format&fit=crop",
  },

  // MAIN COURSE
  {
    id: "mc1",
    name: "Nasi Goreng Rempah Solok",
    description: "Nasi goreng kaya rempah khas Minang (kapulaga, bunga lawang, ketumbar), disajikan dengan ayam panggang, telur mata sapi, emping.",
    price: "Rp 35.000",
    category: "Main Course",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    tag: "Lokal Chef",
    isPopular: true,
  },
  {
    id: "mc2",
    name: "Truffle Carbonara Fettuccine",
    description: "Pasta fettuccine al dente dibalur saus krim keju parmigiano, minyak truffle putih premium, daging asap renyah, dan oregano.",
    price: "Rp 42.000",
    category: "Main Course",
    imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    tag: "Premium Eatery",
  },
  {
    id: "mc3",
    name: "Chicken Katsu Curry Bowl",
    description: "Katsu dada ayam renyah keemasan, disajikan di atas nasi putih pulen dengan siraman saus kari Jepang kental, kentang, wortel.",
    price: "Rp 38.000",
    category: "Main Course",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
  },

  // SNACK
  {
    id: "sn1",
    name: "Cireng Crispy Salt & Pepper",
    description: "Cireng tradisional dengan kulit super renyah dan bagian dalam lembut kenyal, disajikan dengan saus cocolan asam-pedas rujak manis.",
    price: "Rp 18.000",
    category: "Snack",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    tag: "Best Seller",
    isPopular: true,
  },
  {
    id: "sn2",
    name: "Garlic Butter Truffle Fries",
    description: "Kentang goreng potongan tebal gurih digoreng renyah, dibalur mentega bawang putih, minyak truffle, taburan keju parmesan parut.",
    price: "Rp 24.000",
    category: "Snack",
    imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800&auto=format&fit=crop",
  },

  // DESSERT
  {
    id: "ds1",
    name: "Lotus Biscoff Golden Waffle",
    description: "Wafel Belgia panggang hangat berongga renyah, gelato vanila madu Solok, remahan biskuit Lotus, siraman selai biscoff leleh.",
    price: "Rp 28.000",
    category: "Dessert",
    imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop",
    tag: "Indulgent",
    isPopular: true,
  },
  {
    id: "ds2",
    name: "Signature Espresso Tiramisu",
    description: "Kue spons ladyfingers yang direndam dalam espresso LOCSO dan rum non-alkohol, dilapisi krim mascarpone sabayon lembut.",
    price: "Rp 32.000",
    category: "Dessert",
    imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop",
  },
];

export const FASILITAS_LIST: FasilitasItem[] = [
  {
    id: "f1",
    name: "Koneksi WiFi Cepat",
    description: "WiFi berkecepatan tinggi hingga 100 Mbps, stabil untuk rapat video online atau berselancar sosial media.",
    iconName: "Wifi",
  },
  {
    id: "f2",
    name: "Area Indoor Ber-AC",
    description: "Ruangan dalam berdesain minimalis estetik, tenang dan sejuk untuk bekerja (WFC) atau membaca buku.",
    iconName: "Wind",
  },
  {
    id: "f3",
    name: "Area Outdoor Asri",
    description: "Teras luar dikelilingi pepohonan hijau Solok yang sejuk, berangin, sangat ideal untuk mengobrol santai sore hari.",
    iconName: "Trees",
  },
  {
    id: "f4",
    name: "Area Merokok Terpisah",
    description: "Tersedia smoking area semi-outdoor nyaman yang tidak mengganggu pengunjung non-smoking lainnya.",
    iconName: "Compass",
  },
  {
    id: "f5",
    name: "Mushola Nyaman",
    description: "Fasilitas tempat ibadah bersih, rapi, lengkap dengan sajadah dan sarana berwudhu bagi pengunjung muslim.",
    iconName: "HeartHandshake",
  },
  {
    id: "f6",
    name: "Lahan Parkir Luas",
    description: "Area parkir memadai dan aman untuk mobil maupun motor tepat di depan coffee shop dengan penjagaan yang ramah.",
    iconName: "ShieldCheck",
  },
  {
    id: "f7",
    name: "Stop Kontak Melimpah",
    description: "Hampir di setiap sudut meja dan kursi dilengkapi stop kontak, membuat Anda bebas khawatir kehabisan daya gawai.",
    iconName: "Zap",
  },
  {
    id: "f8",
    name: "Suhu & Suasana Tenang",
    description: "Lingkungan tenang yang tidak terlalu bising, dikelilingi arsitektur kayu bernuansa hangat dan ramah.",
    iconName: "Smile",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    imageUrl: storefront,
    title: "Fasad Minimalis Jepang-Skandinavia",
    category: "Interior",
    gridSpan: "md:col-span-2 md:row-span-1",
  },
  {
    id: "g2",
    imageUrl: coffeeGravel,
    title: "Kopi Susu Khas di Atas Kerikil Alam",
    category: "Coffee",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: "g3",
    imageUrl: outdoorSeating,
    title: "Area Outdoor yang Teduh & Luas",
    category: "Outdoor",
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: "g4",
    imageUrl: baristaTeam,
    title: "Dedikasi & Senyuman Hangat Barista Kami",
    category: "Barista",
    gridSpan: "md:col-span-2 md:row-span-1",
  },
  {
    id: "g5",
    imageUrl: outdoorSign,
    title: "Branding Minimalis di Bawah Langit Solok",
    category: "Outdoor",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: "g6",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    title: "Momen Ceria Bersama Orang Terdekat",
    category: "Pengunjung",
    gridSpan: "md:col-span-2 md:row-span-1",
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig1",
    imageUrl: coffeeGravel,
    likes: "248",
    comments: "14",
    caption: "Menikmati sore yang tenang di sudut ternyaman Kota Solok. Kopi hangat dan cerita tanpa jeda. ☕✨ #LOCSOCoffee #KotaSolok",
    url: "https://instagram.com/locsocoffeeandeatery",
  },
  {
    id: "ig2",
    imageUrl: baristaTeam,
    likes: "315",
    comments: "18",
    caption: "Tim barista ramah kami selalu siap menyambut Anda dengan seduhan kopi terbaik penuh presisi. Mari mampir dan bertamu! 👋☕ #LOCSOCoffee #BaristaLife",
    url: "https://instagram.com/locsocoffeeandeatery",
  },
  {
    id: "ig3",
    imageUrl: outdoorSeating,
    likes: "312",
    comments: "25",
    caption: "Sudut bekerja ternyaman di Solok (WFC). WiFi kencang, AC adem, stop kontak melimpah, dan kopi susu aren andalan selalu siap menemani harimu. 💻☕ #WorkFromCafe #SolokEatery",
    url: "https://instagram.com/locsocoffeeandeatery",
  },
  {
    id: "ig4",
    imageUrl: storefront,
    likes: "450",
    comments: "32",
    caption: "Pintu kami selalu terbuka lebar untuk Anda. Sebuah rumah persinggahan minimalis yang hangat di tengah Kota Solok. 🏡✨ #LOCSOCoffee #SolokKuliner #JapaneseNordic",
    url: "https://instagram.com/locsocoffeeandeatery",
  },
];
