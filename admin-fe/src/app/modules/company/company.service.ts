import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseURL = "http://localhost:8080/api/v1/company";
  
  constructor(private httpClient: HttpClient) { }

  getCompanyList(): Observable<Company[]>{
    return this.httpClient.get<Company[]>(`${this.baseURL}`);
  };

  createCompany(company: Company): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,company);
  }

  deleteCompanys(id: BigInt): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getCompanyId(id: BigInt): Observable<any>{
    return this.httpClient.get<Company[]>(`${this.baseURL}/${id}`);
  }

  updateCompany(id: BigInt, company: Company): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, company);
  }
}