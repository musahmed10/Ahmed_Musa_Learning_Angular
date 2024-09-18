import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { RouterOutlet } from '@angular/router';
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ahmed-Musa-Learning-Angular';
  users: User[] = [
    { id: 1, name: 'HP Stream', price: 1250, description: 'Quality meets sleekness', isAvailable: true },
    { id: 2, name: 'HP Probook', price: 650, description: 'Efficiency for less price', isAvailable: true },
    { id: 3, name: 'HP Premium', price: 389, isAvailable: false },
    { id: 4, name: 'HP Elitebook', price: 934, description: 'Rugged and affordable', isAvailable: true },
    { id: 5, name: 'HP Folio', price: 693, description: 'Work and play', isAvailable: true },
    { id: 6, name: 'HP Chromebook', price: 720, description: 'Smaller is better', isAvailable: false }
  ];
}
