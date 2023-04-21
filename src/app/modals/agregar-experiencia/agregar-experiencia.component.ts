import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/service/modal.service';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {
  form: FormGroup;
  titulo: string = '';
  descripcion: string = '';
  periodoComienzo = '';
  periodoFinal = '';
  foto: string = '';
  link: string = '';

  constructor(private builder: FormBuilder, private modal:ModalService, private sExperiencia:ExperienciaService ) {
    this.form = this.builder.group(
      {
        titulo:['',[Validators.required]],
        decripcion:['', [Validators.required, Validators.maxLength(200)]],
        periodoComienzo:[''],
        periodoFinal:[''],
        foto:['',[ Validators.required]],
        link: ['',]
        
      }
    )
   }

  ngOnInit(): void {
  }
  onEnviar(event:Event){
    event.preventDefault;

    if (this.form.valid){
      this.crearExperiencia();
      alert("Experiencia creada con exito.");
      this.closeModal();
      
    }
    else {
      alert("no se pudo crear experiencia")
      this.form.markAllAsTouched();
    }
  }
  closeModal(){
    this.modal.$agregarExperiencia.emit(false);

  }
  
  get Titulo(){
    return this.form.get("titulo");
  }
  get Descripcion(){
    return this.form.get("decripcion");
  }
  get PeriodoComienzo(){
    return this.form.get("periodoComienzo");
  }
  get PeriodoFinal(){
    return this.form.get("periodoFinal");
  }
  get Foto(){
    return this.form.get("foto");
  }
  get Link(){
    return this.form.get("link");
  }
  tituloInvalid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }
  descripcionInvalid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }
  fotoInvalid(){
    return this.Foto?.touched && !this.Foto?.valid;
  }

  //Metodos para el backend

 
  crearExperiencia(): void{
   const experiencia = new Experiencia (this.titulo, this.descripcion, this.periodoComienzo, this.periodoFinal, this.foto, this.link);
    this.sExperiencia.agregarExperiencia(experiencia).subscribe(data =>{alert ("experiencia agregada correctamente")});
    window.location.reload();
  }

}
