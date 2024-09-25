import { Component, Input } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  templateUrl: './product-list-item.component.html',
  imports: [
    NgClass,
    NgIf
  ],
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent {
  @Input() product: any;
  @Input() isEven: boolean = false;
}
