import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;
  private baseUrl: string = `${ this.apiUrl }`;

  constructor(private http: HttpClient) { }

  public login(credentials: {}): Observable<any> {
    return this.http.post<any>(`${ this.baseUrl }/login`, credentials)
      .pipe(
        map((resp: any) => resp.data)
      );
  }
  
  public logout(): Observable<any> {
    const userId = localStorage.getItem('userId');
    return this.http.post<any>(`${ this.baseUrl }/logout/${ userId }`, {})
      .pipe(
        map((resp: any) => resp.data)
      );
  }
  
}
