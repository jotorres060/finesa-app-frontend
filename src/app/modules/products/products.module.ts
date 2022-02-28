import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { PrimengModule } from '../../shared/primeng/primeng.module';

import { ActivePipe } from './pipes/active.pipe';

import { ProductsComponent } from './pages/products/products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { CatalogProductsComponent } from './components/catalog-products/catalog-products.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    ListProductsComponent,
    CreateProductsComponent,
    CatalogProductsComponent,
    ActivePipe,
    ImagePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  exports: [
    CatalogProductsComponent
  ]
})
export class ProductsModule { }
