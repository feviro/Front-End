import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from 'src/app/service/contacto.service';
import { Contacto } from 'src/app/entidades/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form: FormGroup;
  nombre: string;
  mail: string;
  mensaje: string;

  constructor( private modal: ModalService, private builder: FormBuilder,
   private SContacto: ContactoService) {
    this.form = this.builder.group(
      {
        nombre:['', [Validators.required, Validators.minLength(4)]],
        mail:['', [Validators.required, Validators.email]],
        mensaje:[''],
      }
    )
   }

  ngOnInit(): void {
  }
  closeModal(){
    this.modal.$modal.emit(false)
  }
  get Nombre(){
    return this.form.get("nombre");
  }
  get Mail(){
    return this.form.get("mail");
  }
  get Mensaje(){
    return this.form.get("mensaje");
  }
  nombreInvalid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }
  mailInvalid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event:Event){
    event.preventDefault;

    if (this.form.valid){
      alert("¡Gracias! pronto estaré en contacto con usted.")
      this.agregarContacto();
      window.location.reload();
      
    }
    else {
      this.form.markAllAsTouched();
      alert('Por favor verifique los datos.')
    }
  }

  //metodos para el backend

  agregarContacto(){
    const contact = new Contacto (this.nombre, this.mail, this.mensaje);
    this.SContacto.agregarContacto(contact).subscribe()
  }
  
  

}
