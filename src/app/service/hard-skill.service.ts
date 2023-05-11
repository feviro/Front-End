import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkill } from '../entidades/hard-skill';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {

  url: string = "https://backend-feviro.koyeb.app/hardskill";

  constructor(private http:HttpClient) { }

  public list(): Observable<HardSkill[]>{
    return this.http.get<HardSkill[]>(this.url + '/lista');
  }

  public verHardSkill(id:any): Observable<any>{
    return this.http.get<HardSkill[]>(this.url + `/ver/${id}`) 
  }

  public agregarSkill(skill: HardSkill): Observable<any>{
    return this.http.post<any>(this.url + '/crear', skill);
  }

  public eliminarSkill(id: number): Observable<any>{
    window.location.reload();
    alert('Dato eliminado con exito.');
    return this.http.delete<any>(this.url + `/borrar/${id}`)
    
  }

  public editarSkill(skill: HardSkill, id:number): Observable<any>{
    return this.http.put<HardSkill[]>(this.url + `/editar/${id}`, skill)
  }
}
