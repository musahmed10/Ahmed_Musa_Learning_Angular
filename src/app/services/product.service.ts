import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, products } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = products;
  private productToEdit: Product | null = null;

  // CRUD

  // Get products as an Observable
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  // Get products without an observable
  getProductsSync(): Product[] {
    return this.products;
  }

  // Set the product to be edited
  setProductToEdit(product: Product) {
    this.productToEdit = product;
  }

  // Get the product to be edited
  getProductToEdit(): Product | null {
    return this.productToEdit;
  }

  // Method to create a new product
  createProduct(newProduct: Product): Observable<Product[]> {
    this.products.push(newProduct);
    return of(this.products);
  }

  // Method to update an existing product
  updateProduct(updatedProduct: Product): Observable<Product[]> {
    const index = this.products.findIndex(p => p.name === updatedProduct.name);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
    return of(this.products);
  }

  // Method to delete a product by index
  deleteProduct(index: number): Observable<Product | undefined> {
    if (index >= 0 && index < this.products.length) {
      const removedProduct = this.products.splice(index, 1)[0];
      return of(removedProduct);
    }
    return of(undefined);
  }
}
