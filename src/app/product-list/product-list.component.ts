import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../data/mock-content';
import {Router, RouterLink} from '@angular/router';
import {FiftyPercentPromoPipe} from "../pipes/fifty-percent-promo.pipe";
import {AvailabilityColorsPipe} from "../pipes/availability-colors.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent, FiftyPercentPromoPipe, AvailabilityColorsPipe, HoverHighlightDirective, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }


  editProduct(product: Product) {
    this.productService.setProductToEdit(product);
    this.router.navigate(['/modify-product']);
  }


  deleteProduct(index: number) {
    this.productService.deleteProduct(index).subscribe(() => {
      // To refresh the list
      this.products$ = this.productService.getProducts();
    });
  }
}
