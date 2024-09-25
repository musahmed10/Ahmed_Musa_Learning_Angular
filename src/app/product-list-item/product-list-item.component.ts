import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  standalone: true,
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent {
  @Input() product: any;
}

