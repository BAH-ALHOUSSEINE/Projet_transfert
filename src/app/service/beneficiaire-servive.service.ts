import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beneficaire } from '../model/beneficaire';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class BeneficiaireServiveService {
  private baseUrl = 'http://localhost:8080/Transfert/beneficiaire'; 

  constructor(private http: HttpClient) { }


  register(beneficaire: Beneficaire): Observable<Beneficaire> {
   
    const url = `${this.baseUrl}/register`;
   
    return this.http.post<Beneficaire>(url, beneficaire, httpOptions);
  }

  beneficiairebycleint(client : Client): Observable<Beneficaire []> {
   
    const url = `${this.baseUrl}/benefbyclient`;
   
    return this.http.post<Beneficaire []>(url, client, httpOptions);
  }

  findBeneficiaireByid(id :number ): Observable<Beneficaire > {
   
    const url = `${this.baseUrl}/benefByid`;
   
    return this.http.post<Beneficaire>(url, id, httpOptions);
  }


}
