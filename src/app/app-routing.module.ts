import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConexionComponent } from './conexion/conexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BeneficiareComponent } from './beneficiare/beneficiare.component';




const routes: Routes = [
  
  
  {path: "connexion", component : ConexionComponent},
  {path: "inscription", component : InscriptionComponent},
  {path: "acceuil", component : AcceuilComponent},
  {path: "contact", component : ContactComponent},
  {path: "beneficiaire", component : BeneficiareComponent},
  {path: "", redirectTo: "acceuil", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
