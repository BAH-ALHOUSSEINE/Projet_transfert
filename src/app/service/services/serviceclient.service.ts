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

  private baseUrl = 'http://localhost:8080/Transfert/client'; 
  // Base URL for the API
   private  client :  Client = new Client ();


  constructor(private http: HttpClient) { }


  getclient(): Client {
    return this.client;
  }
  
  setClient (client : Client) : void {
     this.client=client;
  }

  // Method to register a new client
  register(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/register`;
    return this.http.post<Client>(url, client, httpOptions);
  }

  // Method to login with email and password
  login(email: string, password: string): Observable<Client> {
    const url = `${this.baseUrl}/login`;
    const body = { emailClient: email, password };
    console.log('Request body:', body); // Affiche le corps de la requête
  return this.http.post<Client>(url, body, httpOptions);
  }

  // Method to get all clients (assuming this endpoint exists)
  getClients(): Observable<Client[]> {
    const url = `${this.baseUrl}/clients`;
    return this.http.get<Client[]>(url);
  }




}
