import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ProductListComponent} from "./app/product-list/product-list.component";
//import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
//import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";


// Define list of routes
const routes: Routes = [
  {path:'', redirectTo: '/products', pathMatch: 'full'}, //default route
  { path: 'products', component: ProductListComponent },  // Eagerly loaded // Main route for product list
  //{path:'modify-product', component: ModifyListItemComponent}, // previously eagerly loaded
  {path:'modify-product', loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},// Now lazy loaded
  //{path:'**', component: PageNotFoundComponent} // Will serve ass my 404 pge // previously eagerly loaded
  {path:'**', loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},// Now lazy loaded
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(() => console.log('Bootstrap successful'))
  .catch(err => console.error('Bootstrap failed', err));
