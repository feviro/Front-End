import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/entidades/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {
  form: FormGroup;
  descripcion: string;
  tituloObtenido: string;
  periodoComienzo: string;
  periodoFinal: string;
  imagen: string;
  link: string;

  constructor(private builder: FormBuilder, private modal:ModalService, private sEducacion:EducacionService ) {
    this.form = this.builder.group(
      {
        decripcion:['', [Validators.required, Validators.maxLength(200)]],
        tituloObtenido:['',[Validators.required]],
        periodoComienzo:[''],
        periodoFinal:[''],
        imagen:['',[ Validators.required]],
        link: ['',]
        
      }
    )
   }

  ngOnInit(): void {
  }
  onEnviar(event:Event){
    event.preventDefault;

    if (this.form.valid){
      this.crearEducacion();
      alert("Experiencia creada con exito.");
      window.location.reload();
      
    }
    else {
      alert("no se pudo crear experiencia")
      this.form.markAllAsTouched();
    }
  }
  closeModal(){
    this.modal.$agregarEducacion.emit(false);

  }
  
  get Descripcion(){
    return this.form.get("decripcion");
  }
  get TituloObtenido(){
    return this.form.get("tituloObtenido");
  }
  get PeriodoComienzo(){
    return this.form.get("periodoComienzo");
  }
  get PeriodoFinal(){
    return this.form.get("periodoFinal");
  }
  get Imagen(){
    return this.form.get("imagen");
  }
  get Link(){
    return this.form.get("link");
  }
  tituloInvalid(){
    return this.TituloObtenido?.touched && !this.TituloObtenido?.valid;
  }
  descripcionInvalid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }
  fotoInvalid(){
    return this.Imagen?.touched && !this.Imagen?.valid;
  }

  //Metodos para el backend

 
  crearEducacion(): void{
   const educacion = new Educacion ( this.descripcion,this.tituloObtenido, this.periodoComienzo, this.periodoFinal, this.imagen, this.link);
    this.sEducacion.agregarEducacion(educacion).subscribe(data =>{alert ("dato educacion agregado correctamente")});
    window.location.reload();
  }

}
