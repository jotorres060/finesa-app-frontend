import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public products: Product[] = [];
  public isLoading: boolean = false;

  constructor(private _products: ProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.isLoading = true;
    // const skip = (event) ? event.first : 0;
    this._products.getAll()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((products: Product[]) => {
        this.products = products;
      }, (err) => {
        const message = err.error.data;
        alert(message);
      });
  }

}
