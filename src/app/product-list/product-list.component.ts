import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from "../product-list-item/product-list-item.component";
import { ProductService } from '../services/product.service';  // Import the service
import { Observable } from 'rxjs';  // Import Observable

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<any[]> = new Observable<any[]>();  // Declare as an Observable

  constructor(private productService: ProductService) { }  // Inject ProductService

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();  // Call getProducts() to get the product list
  }
}
