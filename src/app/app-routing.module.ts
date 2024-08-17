import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConexionComponent } from './conexion/conexion.component';
import { InscriptionComponent } from './inscription/inscription.component';




const routes: Routes = [
  
  
  {path: "acceuil/connexion", component : ConexionComponent},
  {path: "acceuil/inscription", component : InscriptionComponent},
  {path: "acceuil", component : AcceuilComponent},
  {path: "contact", component : ContactComponent},
  {path: "", redirectTo: "acceuil", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
