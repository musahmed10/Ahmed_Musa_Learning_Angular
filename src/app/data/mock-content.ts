export interface Product {
  name: string;
  price: number;
  description?: string; // Optional property
  isAvailable: boolean;
}

export const products: Product[] = [
  { name: 'HP Stream', price: 1250, description: 'Quality meets sleekness', isAvailable: true },
  { name: 'HP Probook', price: 650, description: 'Efficiency for less price', isAvailable: true },
  { name: 'HP Premium', price: 389, isAvailable: false },
  { name: 'HP Elitebook', price: 934, description: 'Rugged and affordable', isAvailable: true }
];

