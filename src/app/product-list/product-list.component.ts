import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../data/mock-content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  errorMessage: string | null = null; // Property to hold error messages

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  editProduct(product: Product) {
    this.productService.setProductToEdit(product);
    this.router.navigate(['/modify-product']);
  }

  deleteProduct(index: number) {
    this.productService.deleteProduct(index).subscribe({
      next: () => {

        this.products$ = this.productService.getProducts();
        this.errorMessage = null; // Clear any previous error messages
      },
      error: (err) => {
        this.errorMessage = 'Sorry, it failed to delete product: ' + err.message;
      }
    });
  }
}

