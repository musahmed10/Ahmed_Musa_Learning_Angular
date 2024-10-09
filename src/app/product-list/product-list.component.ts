import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../data/mock-content';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;  // Observable for products

  constructor(private productService: ProductService) {}  // Inject ProductService

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();  // Fetch products using ProductService
  }
}
