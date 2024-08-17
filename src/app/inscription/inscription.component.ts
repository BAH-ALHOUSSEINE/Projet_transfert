import { Component } from '@angular/core';
import { Client } from '../model/client';
import { ServiceclientService } from '../service/services/serviceclient.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  client: Client = new Client();

  constructor(private clientService: ServiceclientService) {}

  register() {
    this.clientService.register(this.client).subscribe(response => {
      console.log('Client registered:', response);
    });
  }
}

