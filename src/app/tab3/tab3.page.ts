import { Router } from '@angular/router';
import { LoginService } from './../servicios/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private authservice: LoginService, private router: Router) {}

  salir(){
    this.authservice.salir();

    this.router.navigate(['/']);
  }
correo:any;
  
  ngOnInit(){
    console.log("miau");
    this.correo=this.authservice.emaill();
  }
}
