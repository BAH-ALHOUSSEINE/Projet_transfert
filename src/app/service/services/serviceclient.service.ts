import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../model/client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceclientService {

  private baseUrl1 = 'http://localhost:8080/Transfert/client'; 
  // Base URL for the API
  


  constructor(private http: HttpClient) { }



  // Method to register a new client
  register(client: Client): Observable<Client> {
    const url = `${this.baseUrl1}/register`;
    return this.http.post<Client>(url, client, httpOptions);
  }

  // Method to login with email and password
  login(email: string, password: string): Observable<Client> {
    const url = `${this.baseUrl1}/login`;
    const body = { emailClient: email, passwordClient : password };
    console.log('Request body:', body); // Affiche le corps de la requête
  return this.http.post<Client>(url, body, httpOptions);
  }

  getcleint(idClient : number): Observable<Client> {
    const url = `${this.baseUrl1}/getclient`;
    
    // Affiche le corps de la requête
  return this.http.post<Client>(url, idClient, httpOptions);
  }


}
