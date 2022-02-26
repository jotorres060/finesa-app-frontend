import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeng/primeng.module';

import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    MenuBarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MenuBarComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
