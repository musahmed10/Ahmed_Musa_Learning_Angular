import { Injectable } from '@angular/core';
import { products } from '../data/mock-content';  // Your mock data
import { Observable, of } from 'rxjs';  // Import Observable and of from rxjs

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList = products;

  constructor() { }

  // Read: Get all products as an Observable
  getProducts(): Observable<any[]> {
    return of(this.productList);  // Wrap productList in an Observable
  }
}
