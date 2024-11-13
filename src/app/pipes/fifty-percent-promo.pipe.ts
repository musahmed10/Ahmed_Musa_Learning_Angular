import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../data/mock-content";

@Pipe({
  name: 'fiftyPercentPromo',
  standalone: true
})
export class FiftyPercentPromoPipe implements PipeTransform {

  transform(product: Product): number {
    // This custom pipe will half the price of the old price
    return product.price / 2;
  }

}
