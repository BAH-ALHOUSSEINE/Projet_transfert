import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfert } from '../model/transfert';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class TransfertServiceService {
  private baseUrl = 'http://localhost:8080/Transfert/transfert';
  constructor(private http: HttpClient) { }




 addtransfert(transfert: Transfert): Observable<Transfert> {
   
    const url = `${this.baseUrl}/addtransfert`;
   console.log(transfert.benefTransfert);
    return this.http.post<Transfert>(url, transfert, httpOptions);
  }


  codecheick(codecheick : String): Observable<Transfert> {
   
    const url = `${this.baseUrl}/codecheck`;
   
    return this.http.post<Transfert>(url, codecheick, httpOptions);
  }


  retirer(code:   String): Observable<number> {
    const url = `${this.baseUrl}/retirer`;
    
    return this.http.put<number>(url, code, httpOptions);
}




}
