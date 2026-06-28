export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "Coffee" | "Non Coffee" | "Main Course" | "Snack" | "Dessert";
  imageUrl: string;
  tag?: string;
  isPopular?: boolean;
}

export interface FasilitasItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: "Interior" | "Outdoor" | "Coffee" | "Food" | "Pengunjung" | "Barista";
  gridSpan: string; // Tailwind class like md:col-span-2 or md:row-span-2 for masonry grid
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: string;
  comments: string;
  caption: string;
  url: string;
}
