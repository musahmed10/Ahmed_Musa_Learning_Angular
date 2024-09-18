export interface User {
  id: number;              // This is unique to the product
  name: string;            // Tells what the product is called
  price: number;           // The product's price
  description?: string;    // Details about the product
  isAvailable: boolean;        // is the product available or not
}
