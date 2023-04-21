import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/entidades/admin';
import { AdminService } from 'src/app/service/admin.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  modalSwitch: boolean = false;
  loginSwitch: boolean = false;
  modificarExperiencia: boolean = false;
  modificarEducacion: boolean = false;
  modificarInfo: boolean = false;
  agregarSkills: boolean = false;
  agregarSoft: boolean = false;
  agregarProyecto: boolean = false;
  agregarExperiencia: boolean = false;
  agregarEducacion: boolean = false;

  constructor(private modal: ModalService, private adm:AdminService) { }


  ngOnInit(): void {
    this.modal.$modal.subscribe((valor => this.modalSwitch = valor));
    this.modal.$login.subscribe((valor => this.loginSwitch = valor));
    this.modal.$experiencia.subscribe((valor => this.modificarExperiencia = valor));
    this.modal.$educacion.subscribe((valor => this.modificarEducacion = valor));
    this.modal.$info.subscribe((valor => this.modificarInfo = valor));
    this.modal.$skills.subscribe((valor => this.agregarSkills = valor));
    this.modal.$soft.subscribe((valor => this.agregarSoft = valor));
    this.modal.$proyecto.subscribe((valor => this.agregarProyecto = valor));
    this.modal.$agregarExperiencia.subscribe((valor => this.agregarExperiencia = valor));
    this.modal.$agregarEducacion.subscribe((valor => this.agregarEducacion = valor));

  }


}
