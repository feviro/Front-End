import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkill } from 'src/app/entidades/soft-skill';
import { ModalService } from 'src/app/service/modal.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-modificar-soft-skills',
  templateUrl: './modificar-soft-skills.component.html',
  styleUrls: ['./modificar-soft-skills.component.css']
})
export class ModificarSoftSkillsComponent implements OnInit {
  form: FormGroup;
  nombre: string;
  porcentaje: number;
  skill: SoftSkill = null;

  constructor(private builder:FormBuilder, private modal:ModalService,
     private sSkill:SoftSkillService, private route: ActivatedRoute, private router:Router) {
    this.form = this.builder.group(
      {
        nombre:['',[Validators.required]],
        porcentaje: ['', [Validators.required]]
        
      }
    )
   }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.sSkill.verSkill(id).subscribe(data =>{
      this.skill = data;
    })
  }
  onEnviar(event:Event){
    event.preventDefault;

    if(this.form.valid){
      alert('Dato modificado correctamente.');
      this.editarSkill();
    }
    else{
      alert('No se pudo modificar. Verifique los datos.')
    }
  }
  closeModal(){
    this.modal.$soft.emit(false);

  }

  get Nombre(){
  return  this.form.get('nombre');
  }
  get Porcentaje(){
    return  this.form.get('porcentaje');
    }
  
  editarSkill(){
    const id: number = this.route.snapshot.params['id'];
    this.sSkill.editarSkill(this.skill, id).subscribe( data =>{
      this.router.navigate(['']);
    })
    
  }

}
