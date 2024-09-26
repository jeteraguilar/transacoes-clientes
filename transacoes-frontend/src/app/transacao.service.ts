import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Transacao } from './model/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {
  baseUrl:string = "http://localhost:8080/api/transacao";

  constructor(private http:HttpClient) { }

  getAllTransacoes() : Observable<Transacao[]>{
    return this.http.get<Transacao[]>(this.baseUrl+"/all");
  }

  addTransacao(data:Transacao):Observable<Transacao>{
    return this.http.post<Transacao>(this.baseUrl+"/add", data);
  }

  updateTransacao(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTransacao(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getTransacao(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  listarTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.baseUrl}/transacoes`);
  }
}
