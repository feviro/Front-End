import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HardSkill } from 'src/app/entidades/hard-skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-agregar-hard-skill',
  templateUrl: './agregar-hard-skill.component.html',
  styleUrls: ['./agregar-hard-skill.component.css']
})
export class AgregarHardSkillComponent implements OnInit {
  form: FormGroup;
  skill: HardSkill;
  nombre: string = '';
  porcentaje: number;
  logo: string = '';
  color: string = '';

  constructor(private modal:ModalService, private builder:FormBuilder, private sSkill:HardSkillService) {
    this.form  = builder.group({
      nombre:['',[Validators.required, Validators.minLength(3)]],
      porcentaje: ['',[Validators.required]],
      logo: ['',[Validators.required]],
      color: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  closeModal(){
    this.modal.$skills.emit(false);
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.agregarSkill()
      alert('dato creado con exito.');
      window.location.href ='';
    }
    else{
      alert('No se pudo crear skill, verifique los datos.');
    }
  }

  get Nombre () {
    return this.form.get('nombre');
  }
  get Porcentaje(){
    return this.form.get('porcentaje');
  }
  get Logo(){
    return this.form.get('logo');
  }
  get Color(){
    return this.form.get('color');
  }

  //Metodos para el backend

  agregarSkill(){
    const skill = new HardSkill (this.nombre, this.porcentaje, this.color, this.logo);
    this.sSkill.agregarSkill(skill).subscribe(data => alert('Skill creado con exito'));
    window.location.reload();
  }

}
