import { Injectable, ViewChild } from '@angular/core';
import { Merchant_Category } from './merchant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private baseURL = "http://localhost:8080/api/v1/merchant";
  
  constructor(private httpClient: HttpClient) { }

  getMerchCatList(): Observable<Merchant_Category[]>{
    return this.httpClient.get<Merchant_Category[]>(`${this.baseURL}`);
  };

  createMercCat(merchant_category: Merchant_Category): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,merchant_category);
  }

  deleteMercCat(id: String): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getMercCatId(id: String): Observable<any>{
    return this.httpClient.get<Merchant_Category[]>(`${this.baseURL}/${id}`);
  }
  
  updateMercCat(id: String,merchant_category : Merchant_Category): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, merchant_category);
  }
}
