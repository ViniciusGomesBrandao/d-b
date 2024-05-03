import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from '../_services/user.service';
import { UserLocal } from '../_interfaces/user-local';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 400 || err.status === 500) {
      this.authService.loggout();
      return of(err.message);
    }
    return throwError(err);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const userData: UserLocal =  this.userService.getLocalInfo();
    const endpoint = request.clone({}).url.split("https://api.suprem.cash")[1];
    const timestamp = new Date().getTime();
    if (userData.access_token != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userData.access_token}`,
        }
      });
    }
    return next.handle(request).pipe(catchError(err => this.handleAuthError(err)));
  }


}