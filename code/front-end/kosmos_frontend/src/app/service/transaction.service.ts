import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { ValorPagamento } from '../models/valor-pagamento';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = "http://localhost:3000/api"

  private authToken = localStorage.getItem('authToken') || '';
  private header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${this.authToken}`});

  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem('authToken') || '';
    this.header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${this.authToken}`});
  }

  getTransactions(): Observable<Transaction[]> {
    const url = `${this.baseUrl}/transactions`;
    const authToken = localStorage.getItem('authToken') || ''
    const header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${authToken}`});

    return this.http.get<Transaction[]>(url, {headers: header});
  }

  payTransaction(valor: ValorPagamento): Observable<any> {
    const url = `${this.baseUrl}/transactions`
    const authToken = localStorage.getItem('authToken') || ''
    const header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${authToken}`});

    return this.http.post<any>(url, valor, {headers: header});
  }
}
