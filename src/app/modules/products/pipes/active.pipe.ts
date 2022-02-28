import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../models/product';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    return products.filter((product) => product.state == 'active');
  }

}
