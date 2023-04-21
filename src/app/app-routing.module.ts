import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { Error404Component } from './components/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarEducacionComponent } from './modals/agregar-educacion/agregar-educacion.component';
import { AgregarExperienciaComponent } from './modals/agregar-experiencia/agregar-experiencia.component';
import { AgregarHardSkillComponent } from './modals/agregar-hard-skill/agregar-hard-skill.component';
import { AgregarProyectoComponent } from './modals/agregar-proyecto/agregar-proyecto.component';
import { AgregarSoftSkillComponent } from './modals/agregar-soft-skill/agregar-soft-skill.component';
import { ModificarEducacionComponent } from './modals/modificar-educacion/modificar-educacion.component';
import { ModificarExperienciaComponent } from './modals/modificar-experiencia/modificar-experiencia.component';
import { ModificarHardSkillsComponent } from './modals/modificar-hard-skills/modificar-hard-skills.component';
import { ModificarInfoComponent } from './modals/modificar-info/modificar-info.component';
import { ModificarProyectosComponent } from './modals/modificar-proyectos/modificar-proyectos.component';
import { ModificarSoftSkillsComponent } from './modals/modificar-soft-skills/modificar-soft-skills.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  {path: 'about', component: AcercaDeComponent },
  {path: 'experienciaModal', component: ModificarExperienciaComponent},
  {path: 'experienciaModal/:id', component: ModificarExperienciaComponent},
  {path: 'educacionModal/:id', component: ModificarEducacionComponent},
  {path: 'skillModal/:id', component: ModificarHardSkillsComponent},
  {path: 'softSkillModal/:id', component: ModificarSoftSkillsComponent},
  {path: 'proyectoModal/:id', component: ModificarProyectosComponent},
  {path: 'agregar-experiencia', component: AgregarExperienciaComponent},
  {path: 'agregar-educacion', component: AgregarEducacionComponent},
  {path: 'agregar-hard-skill', component: AgregarHardSkillComponent},
  {path: 'agregar-soft-skill', component: AgregarSoftSkillComponent},
  {path:'agregar-proyecto', component: AgregarProyectoComponent},
  {path: 'modificar-info/:id', component: ModificarInfoComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }