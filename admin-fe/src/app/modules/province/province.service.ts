import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Province } from './province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private baseURL = "http://localhost:8080/api/v1/province";
  
  constructor(private httpClient: HttpClient) { }


  getProvinceList(): Observable<Province[]>{
    return this.httpClient.get<Province[]>(`${this.baseURL}`);
  };

  createProvince(province: Province): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,province);
  }
  
  deleteProvince(id: String): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getUserID(id: String): Observable<any>{
    return this.httpClient.get<Province[]>(`${this.baseURL}/${id}`);
  }

  updateProvince(id: String, province: Province): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, province);
  }

}
