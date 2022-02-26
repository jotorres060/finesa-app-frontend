import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BasicInterceptor } from './core/interceptors/basic.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { PrimengModule } from './shared/primeng/primeng.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './core/dashboard/dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule,
    SharedModule,
    DashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
