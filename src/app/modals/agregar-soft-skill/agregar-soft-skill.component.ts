import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoftSkill } from 'src/app/entidades/soft-skill';
import { ModalService } from 'src/app/service/modal.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-agregar-soft-skill',
  templateUrl: './agregar-soft-skill.component.html',
  styleUrls: ['./agregar-soft-skill.component.css']
})
export class AgregarSoftSkillComponent implements OnInit {
  form: FormGroup;
  skill: SoftSkill;
  nombre: string = '';
  porcentaje: number;

  constructor(private modal:ModalService, private builder:FormBuilder, private sSkill:SoftSkillService) {
    this.form  = builder.group({
      nombre:['',[Validators.required, Validators.minLength(3)]],
      porcentaje: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  closeModal(){
    this.modal.$soft.emit(false);
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.agregarSkill()
      alert('dato creado con exito.');
      window.location.reload();
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

  //Metodos para el backend

  agregarSkill(){
    const skill = new SoftSkill (this.nombre, this.porcentaje);
    this.sSkill.agregarSkill(skill).subscribe(data => alert('Skill creado con exito'));
  }

}
