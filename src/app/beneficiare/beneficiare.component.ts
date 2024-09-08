import { Component } from '@angular/core';
import { ConexionComponent } from '../conexion/conexion.component';
import { Client } from '../model/client';
import { ServiceclientService } from '../service/services/serviceclient.service';
import { Beneficaire } from '../model/beneficaire';
import { NgForm } from '@angular/forms';
import { BeneficiaireServiveService } from '../service/beneficiaire-servive.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-beneficiare',
  templateUrl: './beneficiare.component.html',
  styleUrl: './beneficiare.component.css'
})
export class BeneficiareComponent {
   
  
  clientnom :  String = "";
  id  : number  = 0;
  beneficiaire : Beneficaire = new Beneficaire ();

  constructor(private servicebeneficiaire: BeneficiaireServiveService , private clientService: ServiceclientService, private router: Router) {}

  ngOnInit(): void {
    // Récupérer le nom de l'utilisateur à partir du service
   this.beneficiaire.nomBeneficiaire =  sessionStorage.getItem('clientName')  || " ";
   //this.beneficiaire.clientid= (Number)  (sessionStorage.getItem('idclient')  || " ");
  this.clientService.getcleint(Number(sessionStorage.getItem('idclient'))).subscribe( reponse => {
    this.beneficiaire.clientid=reponse;
  });
  
  }

  Ajouter_beneficiaire(){
    console.log(this.beneficiaire.clientid);
  
      this.servicebeneficiaire.register(this.beneficiaire).subscribe(reponse =>{
        
        //  this.router.navigate(['/acceuil']);
    });


  }


}
