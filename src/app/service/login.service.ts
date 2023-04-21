import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logueado: string = sessionStorage.getItem("logueado");

  constructor() { }
   $login = new EventEmitter <any>();

   login(obj:any){
    
    if(obj.usuario == "admin1" && obj.contraseña == "admin123"){
      window.sessionStorage.setItem("logueado", "true")
    }
    else{
      return this.logueado = "false";
    }
    return this.logueado;
   }

   logout(){
    
      window.sessionStorage.setItem("logueado", "false")
    console.log(window.sessionStorage.getItem('logueado'));
    return this.logueado;
   }

   estaLogueado(){
    if(this.logueado == "true"){
      return true;
    }
    else{
      return false;
    }
   }



}
