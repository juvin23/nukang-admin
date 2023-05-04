import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseURL = "http://localhost:8080/api/v1/city";
  
  constructor(private httpClient: HttpClient) { }


  getCityList(): Observable<City[]>{
    return this.httpClient.get<City[]>(`${this.baseURL}`);
  };

  createCity(city: City): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,city);
  }
  
  deleteCity(id: String): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getUserID(id: String): Observable<any>{
    return this.httpClient.get<City[]>(`${this.baseURL}/${id}`);
  }

  updateCity(id: String, city: City): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, city);
  }

}
