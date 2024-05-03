import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from '../_interfaces/response-api';
const API = `http://143.198.107.200:3001`
@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(params: GetAllParams) {
    return this.http.get<ResponseApi>(`${API}/modules`, {
      params: {
        ...params
      }
    })
  }
}


export interface GetAllParams {
  search?: string,
  limit?: number,
  page?: number
}

export interface Module {
  id: number,
  name: string,
  description: string,
  value: number,
  created_at: string,
  updated_at: string,
  path_make_function: string,
  ResourcesOnModules: {
    Resources: {
      id: number,
      name: string,
      description: string,
      library: string,
      value: number,
      created_at: string,
      updated_at: string
    }
  }[]
}