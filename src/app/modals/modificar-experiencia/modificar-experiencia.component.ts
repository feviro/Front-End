import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modificar-experiencia',
  templateUrl: './modificar-experiencia.component.html',
  styleUrls: ['./modificar-experiencia.component.css']
})
export class ModificarExperienciaComponent implements OnInit {
  form: FormGroup;
  experiencia: Experiencia  = null;
  titulo: string = '';
  descripcion: string = '';
  periodoComienzo = '';
  periodoFinal = '';
  foto: string = '';
  link: string = '';

 


  constructor(private builder:FormBuilder, private modal:ModalService, private sExperiencia: ExperienciaService,
     private route:ActivatedRoute, private router: Router) {
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
    const id = this.route.snapshot.params['id'];
    this.sExperiencia.verExperiencia(id).subscribe(data =>{
      this.experiencia = data;
    })
   }
  onEnviar(event:Event){
    event.preventDefault;

    if (this.form.valid){
      this.editarExperiencia();
      this.closeModal();
      alert("Experiencia creada con exito.")
      window.location.href = '/';
      
    }
    else {
      this.form.markAllAsTouched();
    }
  }
  closeModal(){
    this.modal.$experiencia.emit(false);

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

 
 

   editarExperiencia(): void{
    const id = this.route.snapshot.params['id'];
    this.sExperiencia.editarExperiencia(this.experiencia, id).subscribe(data =>{
      this.router.navigate([''])
    })
   }
  


}
