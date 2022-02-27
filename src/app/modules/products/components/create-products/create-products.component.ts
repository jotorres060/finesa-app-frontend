import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit, OnChanges {

  @Input()
  public dialogTitle: string = '';

  @Input()
  public showFrm: boolean = false;

  @Input()
  public product: Product = new Product();

  @Output()
  public hideFrmEvent = new EventEmitter<boolean>();

  public frmProduct: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.maxLength(250)
    ]],
    price: ['', [
      Validators.required,
      Validators.maxLength(250)
    ]],
    state: ['', [
      Validators.required,
    ]],
    // image_url: ['', [
    //   Validators.required,
    //   Validators.maxLength(250),
    //   Validators.email
    // ]],
  });

  constructor(
    private fb: FormBuilder,
    private _product: ProductsService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
      const product = changes['product'].currentValue;
      this.frmProduct.patchValue({
        name: product.name,
        price: product.price,
        state: product.state
      });
    }
  }

  public onSubmit(): void {
    if (this.frmProduct.invalid) {
      this.frmProduct.markAllAsTouched();
      return;
    }

    this.product.name = this.frmProduct.value.name;
    this.product.price = this.frmProduct.value.price;
    this.product.state = this.frmProduct.value.state;

    const productMethod = (this.product.id) ? 'update' : 'store';
    this._product[productMethod](this.product)
      .subscribe({
        next: () => this.hideFrm(),
        error: () => alert('Error interno.')
      });
  }

  public hideFrm(): void {
    this.frmProduct.reset();
    this.hideFrmEvent.emit(false);
  }

}
