import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';
import { Product } from './data/mock-content';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { AsyncPipe } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    ProductListItemComponent,
    AsyncPipe,
    ProductListComponent,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    RouterLinkActive
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products!: Observable<Product[]>;  // Use definite assignment assertion
  selectedProduct!: Product | undefined;  // Store the selected product

  constructor(private productService: ProductService) { }  // Inject ProductService

  ngOnInit(): void {
    this.products = this.productService.getProducts();  // Fetch products using the service
  }

  onProductSelected(product: Product): void {
    this.selectedProduct = product; // Update selected product
  }
}
