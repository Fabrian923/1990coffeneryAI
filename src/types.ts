export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'non-coffee' | 'pastry-snack' | 'main-course' | 'espresso' | 'milk' | 'cold' | 'specialty' | string;
  categoryLabel?: string;
  price: number;
  priceFormatted?: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  calories?: string;
  popular?: boolean;
}

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  size: 'Regular' | 'Large';
  milkOption?: string;
  iceLevel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
}
