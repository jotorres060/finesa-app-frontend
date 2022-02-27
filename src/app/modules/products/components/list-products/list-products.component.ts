import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public products: Product[] = [];
  public product: Product = new Product();
  public dialogTitle: string = '';
  public showFrm: boolean = false;
  public isLoading: boolean = false;

  constructor(private _products: ProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.showFrm = false;
    this.isLoading = true;
    this._products.getAll()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (products: Product[]) => this.products = products,
        error: () => alert('Error interno.')
      });
  }

  public newProduct(): void {
    this.product = new Product();
    this.dialogTitle = 'Nuevo producto';
    this.showFrm = true;
  }

  public editProduct(product: Product): void {
    this.product = product;
    this.dialogTitle = 'Editar producto';
    this.showFrm = true;
  }

}
