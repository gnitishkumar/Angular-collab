import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthheaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(localStorage.getItem('token')==null)
   {
     return next.handle(request);
   }
   const authReq= request.clone({
      setHeaders:{Authorization:"Token "+localStorage.getItem('token')}
    });

  return next.handle(authReq);

    // return next.handle(authReq);
  }
}
