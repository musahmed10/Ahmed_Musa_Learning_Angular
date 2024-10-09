import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ProductListComponent} from "./app/product-list/product-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";


// Define list of routes
const routes: Routes = [
  {path:'', redirectTo: '/products', pathMatch: 'full'}, //default route
  { path: 'products', component: ProductListComponent },  // Main route for product list
  {path:'modify-product', component: ModifyListItemComponent},
  {path:'**', component: PageNotFoundComponent} // Will serve ass my 404 pge
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(() => console.log('Bootstrap successful'))
  .catch(err => console.error('Bootstrap failed', err));
