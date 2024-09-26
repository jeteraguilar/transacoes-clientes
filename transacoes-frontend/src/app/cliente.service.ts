import { Injectable } from '@angular/core';
import { Cliente } from './model/cliente';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl:string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  getAllClientes() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl+"/all");
  }

  addCliente(data:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl+"/add", data);
  }

  updateCliente(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getCliente(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
