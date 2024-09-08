import { Component } from '@angular/core';
import { TransfertServiceService } from '../service/transfert-service.service';
import { Transfert } from '../model/transfert';

@Component({
  selector: 'app-cheicktransfert',
  templateUrl: './cheicktransfert.component.html',
  styleUrl: './cheicktransfert.component.css'
})
export class CheicktransfertComponent {


  verif : number =0;
  code : String ="";
  codeerreur : number = 0;
  transfert : Transfert = new Transfert() ;
  idTRansfert : number = 4 ;


  constructor(private transfertServive : TransfertServiceService) {}
  ngOnInit(): void {
    
  }
  codecheck(){
    console.log(this.code);
    this.transfertServive.codecheick(this.code).subscribe(reponse => {
   
      if(reponse==null){
          this.codeerreur=-1;
      }
      else{
        this.transfert = reponse;
        this.codeerreur = 1;
        //this.code_verif=this.code;
       // this.idTRansfert  =  this.transfert.idTransfert;
        console.log(reponse);
      }

    } );
  }

  retirer_transfert(){

    this.transfertServive.retirer(this.code).subscribe(reponse => {
    
     this.codecheck();

    })
  }

}
