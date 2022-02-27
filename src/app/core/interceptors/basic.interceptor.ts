import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const httpHeaders = request.clone({
      setHeaders: {
        Accept: 'application/json',
        Authorization: `Bearer ${ localStorage.getItem('token') }`
      }
    });

    return next.handle(httpHeaders);
  }
}
