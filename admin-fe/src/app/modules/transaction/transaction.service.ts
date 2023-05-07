import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseURL = "http://localhost:8080/api/v1/transaction";
  
  constructor(private httpClient: HttpClient) { }

  getTransactionList(): Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(`${this.baseURL}`);
  };
}
