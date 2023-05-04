import { HttpClient, HttpRequest , HttpEvent } from '@angular/common/http';
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(`${this.baseURL}`,ads);
  }

}
