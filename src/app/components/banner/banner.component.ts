import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { LoginService } from 'src/app/service/login.service';
import { ModalService } from 'src/app/service/modal.service';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona: Persona[] =[];
  loged: boolean = false;
 

  constructor(private sPersona: PersonaService, private modal: ModalService, private loginS: LoginService) {}

  ngOnInit(): void {
    this.mostrarPersona();
   this.loged = this.logueado();
  }

  mostrarPersona(){
    this.sPersona.list().subscribe(dato => {this.persona = dato});
  }

  modificarInfo(){
    
    this.modal.$info.emit(true);

  }

  logueado(): boolean{
    var data 
    data = this.loginS.logueado;
    if (data === "true"){
      return true;
    }
    else{
      return false;
    }
    }
  }
 


