import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrimengModule } from '../../shared/primeng/primeng.module';
import { ProductsModule } from '../products/products.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule,
    ProductsModule
  ]
})
export class HomeModule { }
