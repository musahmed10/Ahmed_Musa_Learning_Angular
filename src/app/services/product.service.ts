import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, products } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = products;  // Store the products

  // Get products as an Observable
  getProducts(): Observable<Product[]> {
    return of(this.products);  // Return the products array as an observable
  }

  // Method to read a product by id (you may need to modify your product data to include an id)
  readProduct(id: number): Observable<Product | undefined> {
    const product = this.products[id];
    return of(product);  // Return the found product wrapped in an Observable
  }

  // Method to create a new product
  createProduct(newProduct: Product): Observable<Product[]> {
    this.products.push(newProduct);
    return of(this.products);  // Return the updated array wrapped in an Observable
  }

  // Method to update an existing product
  updateProduct(updatedProduct: Product): Observable<Product[]> {
    const index = this.products.findIndex(p => p.name === updatedProduct.name); // Use a unique property for matching
    if (index !== -1) {
      this.products[index] = updatedProduct;  // Update the product
    }
    return of(this.products);  // Return the updated array wrapped in an Observable
  }

  // Method to delete a product by index
  deleteProduct(index: number): Observable<Product | undefined> {
    if (index >= 0 && index < this.products.length) {
      const removedProduct = this.products.splice(index, 1)[0];  // Remove the product
      return of(removedProduct);  // Return the removed product wrapped in an Observable
    }
    return of(undefined);  // If not found, return undefined
  }
}
