import { Component } from '@angular/core';
import { ConexionComponent } from '../conexion/conexion.component';
import { Client } from '../model/client';
import { ServiceclientService } from '../service/services/serviceclient.service';
import { Beneficaire } from '../model/beneficaire';

@Component({
  selector: 'app-beneficiare',
  templateUrl: './beneficiare.component.html',
  styleUrl: './beneficiare.component.css'
})
export class BeneficiareComponent {
   
  
  clientnom :  String = "";
  beneficiaire : Beneficaire = new Beneficaire ();

  constructor(private clientService: ServiceclientService) {}

  ngOnInit(): void {
    // Récupérer le nom de l'utilisateur à partir du service
   this.clientnom =  sessionStorage.getItem('clientName')  || " ";
  
  }

  Ajouter_beneficiaire(){


  }


}
