import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../entidades/soft-skill';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {
  url: string = "https://portfolioback-feviro.koyeb.app/soft";

  constructor(private http:HttpClient) { }

  public list(): Observable<SoftSkill[]>{

    return this.http.get<SoftSkill[]>(this.url + '/lista');
  }

  public verSkill(id:number): Observable<SoftSkill>{
    return this.http.get<SoftSkill>(this.url + `/ver/${id}`) 
  }

  public agregarSkill(soft: SoftSkill): Observable<any>{
    return this.http.post<any>(this.url + '/crear', soft);
  }

  public borrarSkill(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`)
  }

  public editarSkill(soft:SoftSkill, id:number): Observable<any>{
    return this.http.put<any>(this.url + `/editar/${id}`, soft)
  }
}
