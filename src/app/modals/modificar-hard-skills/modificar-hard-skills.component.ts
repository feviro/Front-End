import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HardSkill } from 'src/app/entidades/hard-skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modificar-hard-skills',
  templateUrl: './modificar-hard-skills.component.html',
  styleUrls: ['./modificar-hard-skills.component.css']
})
export class ModificarHardSkillsComponent implements OnInit {
  form: FormGroup;
  skill: HardSkill = null;
  nombre: string = '';
  progreso: number;
  logo: string = '';
  color: string = '';

  constructor(private builder:FormBuilder, private modal:ModalService, private route:ActivatedRoute,
     private router:Router, private sSkill:HardSkillService) {
    this.form = this.builder.group(
      {

      nombre:['',[Validators.required, Validators.minLength(3)]],
      progreso: ['',[Validators.required]],
      logo: ['',[Validators.required]],
      color: ['',[Validators.required]]
        
      }
    )
   }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.sSkill.verHardSkill(id).subscribe(data =>{
      this.skill = data;
    })
  }
  onEnviar(event:Event){

    event.preventDefault;

    if(this.form.valid){
      alert('Dato editado con exito.');
      this.editarSkill();
      window.location.href='';
    }
    else{
      alert('No se pudo modificar. Por favor revise los datos.');
    }

  }
  closeModal(){
    this.modal.$skills.emit(false);

  }

  get Nombre(){
    return this.form.get('nombre');
  }
  get Progreso (){
    return this.form.get('progreso');
  }
  get Logo(){
    return this.form.get('logo');
  }
  get Color(){
    return this.form.get('color');
  }
  

  editarSkill(): void{
   const id = this.route.snapshot.params['id'];
    this.sSkill.editarSkill(this.skill, id).subscribe(data =>{
      this.router.navigate(['']);
    })
  }
 

}