import { EventEmitter, Injectable } from '@angular/core';
import { every } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
//servicios para desplegar modales//
  $modal = new EventEmitter<any>();
  $login = new EventEmitter<any>();
  $experiencia = new EventEmitter<any>();
  $educacion = new EventEmitter<any>();
  $info = new EventEmitter<any>();
  $skills = new EventEmitter<any>();
  $soft = new EventEmitter<any>();
  $proyecto = new EventEmitter<any>();
  $agregarExperiencia = new EventEmitter<any>();
  $agregarEducacion = new EventEmitter<any>();


  //servicios para llevar un id de un componente a otro (para editar informacion)//

  $idExperiencia = new EventEmitter <any>();
}
