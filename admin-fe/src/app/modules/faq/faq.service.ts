import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Faq } from './faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private baseURL = "http://localhost:8080/api/v1/faq";
  
  constructor(private httpClient: HttpClient) { }


  getFaqList(): Observable<Faq[]>{
    return this.httpClient.get<Faq[]>(`${this.baseURL}`);
  };

  createFaq(faq: Faq): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,faq);
  }
  
  deleteFaq(id: String): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getUserID(id: String): Observable<any>{
    return this.httpClient.get<Faq[]>(`${this.baseURL}/${id}`);
  }

  updateFaq(id: String, faq: Faq): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, faq);
  }

}
