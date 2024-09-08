import { Component } from '@angular/core';
import { Transfert } from '../model/transfert';
import { Beneficaire } from '../model/beneficaire';
import { TransfertServiceService } from '../service/transfert-service.service';
import { Router } from '@angular/router';
import { BeneficiaireServiveService } from '../service/beneficiaire-servive.service';
import { Client } from '../model/client';
import { ServiceclientService } from '../service/services/serviceclient.service';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrl: './transfert.component.css'
})
export class TransfertComponent {

  transfert   : Transfert = new Transfert ();
  beneficiaire ?: Beneficaire [];
  idbenef : number =0 ;
  client ? : Client;

  constructor(private transfertServive : TransfertServiceService, private clientService: ServiceclientService, private servicebeneficiaire: BeneficiaireServiveService , private router: Router) {}

  ngOnInit(): void {
    // Récupérer le nom de l'utilisateur à partir du service
     this.transfert.etatTransfert=false;
     this.transfert.codeTransfert="ADDou"+Math.random();;
     console.log(Number(sessionStorage.getItem('idclient')));
     this.clientService.getcleint(Number(sessionStorage.getItem('idclient'))).subscribe( reponse => {
      this.client=reponse;
      console.log(this.client);
      this.servicebeneficiaire.beneficiairebycleint(this.client).subscribe(reponse => {
        this.beneficiaire= reponse;
        console.log(this.beneficiaire);
       
        
       });
    });

   
  
  }
  Ajouter_transfert ()  {

    console.log(this.idbenef);
    this.servicebeneficiaire.findBeneficiaireByid(this.idbenef).subscribe(reponse => {
      this.transfert.benefTransfert=reponse;
      console.log(reponse);

      this.transfertServive.addtransfert(this.transfert).subscribe(reponse =>{
      console.log(this.transfert.benefTransfert);
      sessionStorage.setItem('codeTransfert', this.transfert.codeTransfert? this.transfert.codeTransfert.toString() : '');
      sessionStorage.setItem('nomBeneficiaire', this.transfert.benefTransfert?.nomBeneficiaire? this.transfert.benefTransfert.nomBeneficiaire.toString() : '');
      sessionStorage.setItem('prenomBneneficiaire', this.transfert.benefTransfert?.prenomBeneficiaire? this.transfert.benefTransfert.prenomBeneficiaire?.toString() : '');

      this.router.navigate(['/confirmationtransfert']);
      });
      
     });

     
   
}
}


