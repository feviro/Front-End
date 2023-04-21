import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  usuario: string;
  password: string;

  constructor(private modal:ModalService, private builder:FormBuilder,
    private loged:LoginService) { 
    this.form = this.builder.group(
      {
        usuario:['', [Validators.required, Validators.minLength(6)]],
        contraseña:['', [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.modal.$login.emit(false)
  }
  get Usuario(){
    return this.form.get("usuario");
  }
  get Password(){
    return this.form.get("contraseña");
  }
  usuarioInvalid(){
    return this.Usuario?.touched && !this.Usuario?.valid;
  }
  onEnviar(event:Event){
    event.preventDefault;

    if (this.form.valid && this.usuario == "admin1" && this.password == "admin123"){
      this.login(this.form.value);
      alert("Usuario logueado con exito.")
      this.closeModal();
      window.location.reload();
    }
    else {
      this.form.markAllAsTouched();
      alert('Alguno de los datos es erroneo.')
    }
  }

  login(objeto:any){
    return this.loged.login(objeto);
  }

}
