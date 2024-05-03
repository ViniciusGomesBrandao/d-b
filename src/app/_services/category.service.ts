import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from '../_interfaces/response-api';
const API = `http://143.198.107.200:3001`
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: GetAllParams){
    return this.http.get<ResponseApi>(`${API}/categories`, {
      params: {
        ...params
      }
    })
  }

  new(params: NewParams){
    return this.http.post<ResponseApi>(`${API}/categories`, {
      ...params  
    })
  }
}


export interface GetAllParams{
  search?: string,
  limit?: number,
  page?: number
}

export interface NewParams{
  name: string,
  description: string,
  modules: []
}