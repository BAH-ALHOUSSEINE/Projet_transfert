import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceclientService } from '../service/services/serviceclient.service';
import { Client } from '../model/client';

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrl: './conexion.component.css'
})
export class ConexionComponent {

  email: string = '';
  password: string = '';
  loginerreur ? : number;
  currentclient ? : Client;

  constructor(private clientService: ServiceclientService, private router: Router) {}

  login() {

   
    this.clientService.login(this.email, this.password).subscribe(response => {
     
      if(response==null){
        this.loginerreur=-1;
      }
      else{

         // Stocker les informations de l'utilisateur dans la session
         sessionStorage.setItem('clientName', response.nomClient ? response.nomClient.toString() : '');
         sessionStorage.setItem('clientEmail', response.emailClient ? response.emailClient.toString() : '');
         

    //   this.onLoginSuccess(response);
        this.router.navigate(['/beneficiaire']);
       
      }
      
    
      
    });
  }

  onLoginSuccess(userName: Client): void {
    // Stocker le nom de l'utilisateur dans le service
    this.clientService.setClient(userName);
  }

}
