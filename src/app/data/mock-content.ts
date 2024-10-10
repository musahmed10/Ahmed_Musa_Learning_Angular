export interface Product {
  name: string;
  price: number;
  description?: string; // Optional property
  isAvailable: boolean;
  imageUrl?: string;
}

export const products: Product[] = [
  { name: 'Sample Product 2', price: 49.99, description: 'This is a sample product 2.', isAvailable: false, imageUrl: 'assets/images/sample.jpeg'},
  { name: 'HP Stream', price: 1250, description: 'Quality meets sleekness', isAvailable: true, imageUrl: 'assets/images/stream.jpeg' },
  { name: 'HP Probook', price: 650, description: 'Efficiency for less price', isAvailable: true, imageUrl: 'assets/images/probook.jpeg' },
  { name: 'HP Premium', price: 389, isAvailable: false, imageUrl: 'assets/images/premium.jpeg' },
  { name: 'HP Elitebook', price: 934, description: 'Rugged and affordable', isAvailable: true, imageUrl: 'assets/images/elitebook.jpeg' }

];

