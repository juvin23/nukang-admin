import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Merchant } from './merchant';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private baseURL = "http://localhost:8080/api/v1/merchant";
  
  constructor(private httpClient: HttpClient) { }


  getMerchantList(): Observable<Merchant[]>{
    return this.httpClient.get<Merchant[]>(`${this.baseURL}`);
  };

  createMerchant(merchant: Merchant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,merchant);
  }
  
  deleteMerchant(id: String): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getUserID(id: String): Observable<any>{
    return this.httpClient.get<Merchant[]>(`${this.baseURL}/${id}`);
  }

  updateMerchant(id: String, merchant: Merchant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, merchant);
  }

  updateMerchantStatus(id: String, status: String): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/update-status/${id}`, status);
  }

}
