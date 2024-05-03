import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../_interfaces/response-api';
import { Router } from '@angular/router';
const API = `http://143.198.107.200:3001`
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  login(params: AuthLoginParams) {
    return this.http.post<ResponseApi>(`${API}/auth/login`, {
      email: params.email,
      password: params.password
    });
  }

  loggout(){
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }
}

export interface AuthLoginParams {
  email: string | null | undefined,
  password: string | null | undefined
}
