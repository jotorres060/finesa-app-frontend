import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '../../../../environments/environment';

import { Product } from '../models/product';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(product: Product): string | null {
    const baseUrl = environment.baseUrl;
    return (product.image_url) ? `${ baseUrl }/storage/${ product.image_url }` : 'assets/images/no-image.png';
  }

}
