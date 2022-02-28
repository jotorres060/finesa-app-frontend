import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.css']
})
export class CatalogProductsComponent implements OnInit {

  public products: Product[] = [];

  constructor(private _products: ProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this._products.getAll()
      .subscribe({
        next: (products: Product[]) => this.products = products,
        error: () => alert('Error interno.')
      });
  }

}
