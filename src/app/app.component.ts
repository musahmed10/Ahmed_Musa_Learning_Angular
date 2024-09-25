import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    { name: 'HP Stream', price: 1250, description: 'Quality meets sleekness', isAvailable: true },
    { name: 'HP Probook', price: 650, description: 'Efficiency for less price', isAvailable: true },
    { name: 'HP Premium', price: 389, isAvailable: false },
    { name: 'HP Elitebook', price: 934, description: 'Rugged and affordable', isAvailable: true }
  ];
}
