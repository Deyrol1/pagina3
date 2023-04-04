import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:AngularFireAuth) { }


  async login(email:string, contrasena:string ){

    try{
      return await this.auth.signInWithEmailAndPassword(email,contrasena);
    }catch(err){
      console.log("error",err);
      return null;

    }
  }

  async registro(email:string, contrasena:string ){

    try{
      return await this.auth.createUserWithEmailAndPassword(email,contrasena);
    }catch(err){
      console.log("error",err);
      return null;

    }
  }

  salir(){
    this.auth.signOut();
  }


  correo:any;
  email(email:string){
    this.correo=email;
  }

  emaill(){
    return this.correo;
  }
}
