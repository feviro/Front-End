import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { ModalService } from 'src/app/service/modal.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  habilidad: any;
  porcentajeCompleto: any;
  delete: boolean = false;
  editarSkill: boolean = false;
  loged: boolean = false;

  constructor(private Sskill: SoftSkillService, private modal: ModalService,
    private loginS: LoginService) { }

  ngOnInit(): void {
   this.llamarSkill();
   this.loged = this.logueado();
  }
  takePercentage(){
    return this.porcentajeCompleto = this.habilidad.porcentaje;
  }
  modificarSkills(){
    this.editarSkill = !this.editarSkill;
  }
  deleteSkill(){

    this.delete = !this.delete;

  }
  agregarSkill(){
    this.modal.$soft.emit(true);
  }

  llamarSkill(){
    this.Sskill.list().subscribe(data =>{this.habilidad = data})
  }
  
  //metodos para el backend

  eliminarSkill(id:number){
  
      this.Sskill.borrarSkill(id).subscribe();
      alert("Dato eliminado con exito.");
      window.location.reload();
     
    
  }

  //Metodo para el login

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
