import { LoginService } from './../servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  usuario={
    email:'',
    contrasena:''
  }


  correo:any;
  registrar(){
    const {email,contrasena}= this.usuario;
    this.authservice.registro(email,contrasena).then(res =>{
      console.log("regitro",res);
    })
  }
  ingresar(){
    const {email,contrasena}= this.usuario;
  
    
    this.authservice.login(email,contrasena).then(res =>{
      console.log("inicio ",res.user.email);

      this.authservice.email(res.user.email);

      
    


      this.router.navigate(['/tabs']);
    })
  
  }
  constructor(private authservice: LoginService,private router: Router) { }

  ngOnInit() {
  }

}
