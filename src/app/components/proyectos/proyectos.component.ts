import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { ModalService } from 'src/app/service/modal.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: any;
  delete: boolean = false;
  modificarToggle: boolean = false;
  loged: boolean = false;

  constructor(private sProyecto:ProyectoService, private modal:ModalService,
    private loginS:LoginService) { }

  ngOnInit(): void {
    this.sProyecto.list().subscribe(data=>(
      this.proyecto = data
    ));
    this.loged = this.logueado();
  }
  modificar(){
    this.modificarToggle = !this.modificarToggle;
  }
  agregarProyecto(){
    this.modal.$proyecto.emit(true);
  }
  deleteProyecto(){
    this.delete = !this.delete;
  }

  //metodos para el backend
  eliminarProyecto(id: number){
    alert('Dato borrado exitosamente.');
    window.location.reload();
    this.sProyecto.borrarProyecto(id).subscribe();
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
