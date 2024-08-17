import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../../model/client';
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ServiceclientService {

  private apiUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }

  register(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/register`, client);
  }

  login(email: string, password: string): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/login`, { email, password });
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }
  
}
