import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availabilityColors',
  standalone: true
})
export class AvailabilityColorsPipe implements PipeTransform {

  transform(isAvailable: boolean): string {
    // This returns the css class out of stock, to eventually style it to red text color
    //when the product is out of stock
    return isAvailable ? '' : 'out-of-stock';
  }
}
