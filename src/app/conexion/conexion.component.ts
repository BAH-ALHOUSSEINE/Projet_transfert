import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceclientService } from '../service/services/serviceclient.service';

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrl: './conexion.component.css'
})
export class ConexionComponent {

  email: string = '';
  password: string = '';

  constructor(private clientService: ServiceclientService, private router: Router) {}

  login() {
    this.clientService.login(this.email, this.password).subscribe(response => {
     
      if (response.emailClient==null) {
        alert('Login successful, token received:');
      } else {
        console.log('Login failed, no token received.');
      }
    
      //this.router.navigate(['/acceuil']);
    });
  }

}
