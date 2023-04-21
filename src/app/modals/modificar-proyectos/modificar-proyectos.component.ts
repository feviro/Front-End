import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/entidades/proyecto';
import { ModalService } from 'src/app/service/modal.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-modificar-proyectos',
  templateUrl: './modificar-proyectos.component.html',
  styleUrls: ['./modificar-proyectos.component.css']
})
export class ModificarProyectosComponent implements OnInit {
  form: FormGroup;
  modificarToggle: boolean = false;
  proyecto: Proyecto = null;

  constructor(private builder:FormBuilder, private modal:ModalService, private sProyecto:ProyectoService,
    private route:ActivatedRoute, private router:Router) {
    this.form = this.builder.group(
      {
        nombre: ['',[Validators.required]],
        descripcion: ['',[Validators.required]],
        link: [''],
      }
    )
   }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.sProyecto.verProyecto(id).subscribe(data=>{
      this.proyecto = data
    }
      );
  }
  onEnviar(event:Event){
    event.preventDefault;

    if(this.form.valid){
      alert('Dato modificado con exito.');
      this.editarProyecto();
      this.router.navigate(['']);
    }
    else{
      alert('No se modificó. Por favor verifique los datos.')
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

 editarProyecto(){
  const id = this.route.snapshot.params['id'];
  this.sProyecto.editarProyecto(this.proyecto, id).subscribe();
 }

}
