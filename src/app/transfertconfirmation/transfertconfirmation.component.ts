import { Component } from '@angular/core';

@Component({
  selector: 'app-transfertconfirmation',
  templateUrl: './transfertconfirmation.component.html',
  styleUrl: './transfertconfirmation.component.css'
})
export class TransfertconfirmationComponent {


  
   nomBeneficiaire : String ="";
   prenomBeneficiaire : String = "";
   code  : String = "";

   ngOnInit(): void {
    
    this.nomBeneficiaire=sessionStorage.getItem('prenomBeneficiaire')  || " ";
    this.prenomBeneficiaire = sessionStorage.getItem('nomBeneficiaire')  || " ";
    this.code = sessionStorage.getItem('codeTransfert')  || " ";


   }

}
