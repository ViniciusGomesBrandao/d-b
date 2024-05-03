import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from '../_interfaces/response-api';
const API = `http://143.198.107.200:3001`
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private http: HttpClient
  ){

  }

  getPdfReport(params: getPdfReportParams){
    return this.http.get<any>(`${API}/reports`, {
      params: {
        ...params
      },
    })
  }

}


export interface getPdfReportParams{
  categoryID: string,
  doc: string
}
