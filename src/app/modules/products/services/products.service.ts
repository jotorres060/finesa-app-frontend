import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string = environment.apiUrl;
  private baseUrl: string = `${ this.apiUrl }/products`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${ this.baseUrl }`);
  }

  public store(product: Product): Observable<Product> {
    return this.http.post<Product>(`${ this.baseUrl }`, product);
  }

  public update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${ this.baseUrl }/${ product.id }`, product);
  }

  public uploadImage(formData: FormData): Observable<string> {
    return this.http.post<string>(`${ this.baseUrl }/upload-image`, formData);
  }
  
}
