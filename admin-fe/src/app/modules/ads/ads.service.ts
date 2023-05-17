import { HttpClient, HttpRequest , HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ads } from './ads';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private baseURL = "http://localhost:8080/api/v1/ads";

  constructor(private httpClient: HttpClient) { }

  createAdsDetail(ads: Ads): Observable<Object>{
    let header = new HttpHeaders();
    header.append('Content-Type', 'multipart/form-data');
    return this.httpClient.post(`${this.baseURL}`,ads,{headers: header});
  }

}
