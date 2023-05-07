import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private baseURL = "http://localhost:8080/api/v1/users";
  private baseURL = "http://localhost:8080/api/v1/customers";
  
  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  };

  getUserById(id: BigInt): Observable<any>{
    return this.httpClient.get<User[]>(`${this.baseURL}/${id}`);
  }

  updateUser(id: BigInt, user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, user);
  }

  updateUserStatus(id: BigInt, status: string): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/update-status/${id}`, status);
  }

  deleteUser(id: BigInt): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
}
