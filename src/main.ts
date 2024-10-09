import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ProductListComponent} from "./app/product-list/product-list.component";

// Define list of routes
const routes: Routes = [
  {path:'', redirectTo: '/products', pathMatch: 'full'}, //default route
  { path: 'products', component: ProductListComponent }  // Main route for product list
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(() => console.log('Bootstrap successful'))
  .catch(err => console.error('Bootstrap failed', err));
