import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ProductListComponent} from "./app/product-list/product-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";


// Define list of routes
const routes: Routes = [
  {path:'', redirectTo: '/products', pathMatch: 'full'}, //default route
  { path: 'products', component: ProductListComponent },  // Main route for product list
  {path:'modify-product', component: ModifyListItemComponent},
  {path:'**', component: PageNotFoundComponent} // Will serve ass my 404 pge
];

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes), importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }))]
}).then(() => console.log('Bootstrap successful'))
  .catch(err => console.error('Bootstrap failed', err));
