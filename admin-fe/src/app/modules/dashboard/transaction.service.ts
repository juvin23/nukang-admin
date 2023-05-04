import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { transactions_history } from './transactions_history';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseURL = "http://localhost:8080/api/v1/transaction";
  
  constructor(private httpClient: HttpClient) { }

  getTransactionList(): Observable<transactions_history[]>{
    return this.httpClient.get<transactions_history[]>(`${this.baseURL}`);
  };
}
