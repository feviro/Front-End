import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Proyecto } from 'src/app/entidades/proyecto';
import { ModalService } from 'src/app/service/modal.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  form: FormGroup;
  modificarToggle: boolean = false;
  nombre: string;
  descripcion: string;
  link: string;

  constructor(private builder:FormBuilder, private modal:ModalService,
     private sProyecto: ProyectoService) {
    this.form = this.builder.group(
      {
        nombre: ['',[Validators.required]],
        descripcion: ['', [Validators.required]],
        link: [''],
      }
    )
   }
  ngOnInit(): void {
  }
  onEnviar(event:Event){
    event.preventDefault

    if(this.form.valid){
      alert('Dato creado exitosamente.');
      this.agregarProyecto();
      window.location.reload()
    }
    else{
      alert('No se pudo crear. Verifique los datos.')
    }

  }
  closeModal(){
    this.modal.$proyecto.emit(false);

  }

  get Nombre(){
    return this.form.get('nombre');
  }
  get Descripcion(){
    return this.form.get('descripcion');
  }

  agregarProyecto(){
    const proyecto = new Proyecto (this.nombre, this.link,  this.descripcion,)
    this.sProyecto.agregarProyecto(proyecto).subscribe();
  }

}
