import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  private baseURL = "http://localhost:8080/api/v1/login";
  
  constructor(private httpClient: HttpClient) { }

  loginAdmin(admin:Admin): Observable<object>{
    console.log(admin);
    return this.httpClient.post(`${this.baseURL}`,admin);
  };
  
}
