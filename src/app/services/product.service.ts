import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../data/mock-content';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'api/products'; //url to web api
  private productToEdit: Product | null = null;

  constructor(private http: HttpClient) {} // We Inject the HttpClient

  // CRUD with HTTP requests

  // Get products as an Observable
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get products without an observable (no HTTP call needed)
  getProductsSync(): Product[] {
    return [];
  }

  // Set the product to be edited
  setProductToEdit(product: Product) {
    this.productToEdit = product;
  }

  // Get the product to be edited
  getProductToEdit(): Product | null {
    return this.productToEdit;
  }

  // Create a new product
  createProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, newProduct).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing product
  updateProduct(updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(this.apiUrl, updatedProduct).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a product by index
  deleteProduct(index: number): Observable<{}> {
    const url = `${this.apiUrl}/${index}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
