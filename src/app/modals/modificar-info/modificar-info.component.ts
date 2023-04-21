import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/entidades/persona';
import { ModalService } from 'src/app/service/modal.service';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-modificar-info',
  templateUrl: './modificar-info.component.html',
  styleUrls: ['./modificar-info.component.css']
})
export class ModificarInfoComponent implements OnInit {
  form: FormGroup;
  info: Persona = null;
  titulo: string = '';
  descripcion: string = '';
  nombre: string = '';
  foto: string = '';
  banner: string = '';
 

  modificarToggle: boolean = false;

  constructor(private builder:FormBuilder, private modal:ModalService,
     private sPersona:PersonaService, private route:ActivatedRoute, private router:Router ) {
    this.form = this.builder.group(
      {
        titulo:['',[Validators.required]],
        descripcion:['', [Validators.required, Validators.maxLength(255)]],
        nombre:['',[ Validators.required]],
        foto:['',[ Validators.required]],
        banner: ['', [Validators.required]]
        
      }
    )
   }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.sPersona.verPersona(id).subscribe(data =>{
      this.info = data
    })
  }
  onEnviar(event:Event){
    event.preventDefault;

    if(this.form.valid){
      
      this.editarInfo();
      alert("Datos modificados exitosamente.");
      window.location.href='';
    }
    else{
      this.form.markAllAsTouched();
      alert ("El dato no fue creado correctamente. Por favor intente nuevamente.")
    }
      
    
  
  }
  closeModal(){
    this.modal.$info.emit(false);

  }
  
  modificar(){
//cambia el estado de modificar a agregar
    this.modificarToggle = !this.modificarToggle;
    
  }
// crea una nueva entidad persona
  crearInfo(): void{
    
    const id: number = 1;

    this.sPersona.borrarPersona(id).subscribe(data => alert("se ha borrado la persona anterior."));

    const perso = new Persona(this.titulo, this.descripcion, this.nombre, this.foto, this.banner);
    this.sPersona.editarPersona(perso, id).subscribe(data => {alert("persona añadida") 
    window.location.reload();
  })

  }

  editarInfo(){

    const id = this.route.snapshot.params['id'];
    this.sPersona.editarPersona(this.info, id).subscribe(data =>{
       this.info = data
      });

  }
 

  get Titulo(){
    return this.form.get("titulo");
  }
  get Descripcion(){
    return this.form.get("descripcion");
  }
  get Nombre(){
    return this.form.get("nombre");
  }
  get Foto(){
    return this.form.get("foto");
  }
  get Banner(){
    return this.form.get("banner");
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

}
