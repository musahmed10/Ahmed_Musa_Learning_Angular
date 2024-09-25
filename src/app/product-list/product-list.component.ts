import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[] = [];
}
