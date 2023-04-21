import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/entidades/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ModalService } from 'src/app/service/modal.service';


@Component({
  selector: 'app-modificar-educacion',
  templateUrl: './modificar-educacion.component.html',
  styleUrls: ['./modificar-educacion.component.css']
})
export class ModificarEducacionComponent implements OnInit {
  form: FormGroup;
  modificarToggle: boolean = false;
  educacion: Educacion = null;
  tituloObtenido: string = '';
  descripcion: string = '';
  periodoComienzo = '';
  periodoFinal = '';
  imagen: string = '';
  link: string = '';


  constructor(private builder:FormBuilder, private modal:ModalService, private route:ActivatedRoute,
     private router:Router, private sEducacion:EducacionService) {
    this.form = this.builder.group(
      {
        tituloObtenido:['',[Validators.required]],
        decripcion:['', [Validators.required, Validators.maxLength(200)]],
        periodoComienzo:[''],
        periodoFinal:[''],
        imagen:['', [Validators.required]],
        link: ['',]

        
      }
    )
   }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.sEducacion.verEducacion(id).subscribe(data =>{
      this.educacion = data;
    })
  }
  onEnviar(event:Event){
    event.preventDefault;

    if (this.form.valid){
      this.editarEducacion();
      this.router.navigate(['']);
      alert("Dato modificado con exito");
      
    }
    else {
      this.form.markAllAsTouched();
    }
  

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
 
  descripcionInvalid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }
  tituloInvalid(){
    return this.TituloObtenido?.touched && !this.TituloObtenido?.valid;
  }
  fotoInvalid(){
    return this.Imagen?.touched && !this.Imagen?.valid;
  }


  editarEducacion(): void{
    const id = this.route.snapshot.params['id'];
    this.sEducacion.editarEducacion(this.educacion, id).subscribe(data => {
      this.router.navigate(['']);
    })
  }
}
