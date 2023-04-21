import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Educacion } from 'src/app/entidades/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  educacion: any = [];
  delete: boolean = false;
  deleteEducacion: boolean = false;
  editarExperiencia: boolean = false;
  editarEducacion: boolean = false;
  experiencias: Experiencia []=[];

  loged: boolean = false;

  constructor( private modal:ModalService, public sExperiencia:ExperienciaService,
     public sEducacion: EducacionService, private loginS: LoginService) { }

  ngOnInit(): void {
    this.llamarExperiencia();
    this.llamarEducacion();

    this.loged = this.logueado();
    
  }

  desplegarModal(){
    //despliega el modal de modificacion o agregacion 
    this.modal.$experiencia.emit(true);
    this.modal.$idExperiencia.emit(this.experiencias)
  }
  desplegarModificar(){
    this.modal.$educacion.emit(true);
  }
  desplegarDelete(){
    this.delete = !this.delete;

  }
  desplegarDeleteEducacion(){
    this.deleteEducacion = !this.deleteEducacion;

  }
  desplegarEditarExperiencia(){
    this.editarExperiencia = !this.editarExperiencia;
  }
  desplegarEditarEducacion(){
    this.editarEducacion = !this.editarEducacion;
  }
  desplegarAgregarExperiencia(){
    this.modal.$agregarExperiencia.emit(true);
  }
  desplegarAgregarEducacion(){
    this.modal.$agregarEducacion.emit(true);
  }

  //Metodos para el backend experiencia
  llamarExperiencia(): void{
    this.sExperiencia.list().subscribe(data => {this.experiencias = data});
  }

  borrarExperiencia(id: number) {

      this.sExperiencia.borrarExperiencia(id).subscribe();
      window.location.reload();
      return alert("experiencia eliminada con exito.");
      
  }

  //Metodos para backend Educacion

  llamarEducacion(): void{
    this.sEducacion.list().subscribe(data => {this.educacion = data});
  }
  borrarEducacion(id: number){
    this.sEducacion.borrarEducacion(id).subscribe();
    window.location.reload();
    return alert ("educacion eliminada con exito");
  }

  // Metodo para el login
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
