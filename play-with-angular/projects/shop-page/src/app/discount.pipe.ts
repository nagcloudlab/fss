import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    let discountPercentage = args[0] || 0;
    return value - (value * discountPercentage) / 100;
  }
}
