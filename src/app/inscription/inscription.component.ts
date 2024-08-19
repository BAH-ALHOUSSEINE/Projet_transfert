import { Component } from '@angular/core';
import { Client } from '../model/client';
import { ServiceclientService } from '../service/services/serviceclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  client: Client = new Client();

  constructor(private clientService: ServiceclientService , private router: Router) {}

  register() {
    this.clientService.register(this.client).subscribe(reponse =>{
          console.log(reponse);
          this.router.navigate(['/acceuil']);
    });
  
    }
  }


