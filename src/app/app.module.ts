import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { ConexionComponent } from './conexion/conexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { BeneficiareComponent } from './beneficiare/beneficiare.component';
import { TransfertComponent } from './transfert/transfert.component';
import { CheicktransfertComponent } from './cheicktransfert/cheicktransfert.component';
import { TransfertconfirmationComponent } from './transfertconfirmation/transfertconfirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FooterComponent,
    HeaderComponent,
    AcceuilComponent,
    ContactComponent,
    ConexionComponent,
    InscriptionComponent,
    BeneficiareComponent,
    TransfertComponent,
    CheicktransfertComponent,
    TransfertconfirmationComponent,


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
