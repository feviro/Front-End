import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url: string = "https://backend-feviro.koyeb.app/experiencia";

  constructor(private http:HttpClient) {  }

  public list(): Observable<Experiencia[]>{

    return this.http.get<Experiencia[]>(this.url + '/lista');
  }

  public verExperiencia(id:any): Observable<any>{
    return this.http.get<Experiencia[]>(this.url + `/ver/${id}`) 
  }

  public agregarExperiencia(expe: Experiencia): Observable<any>{
    return this.http.post<any>(this.url + '/crear', expe);
  }

  public borrarExperiencia(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`)
  }

  public editarExperiencia(expe: Experiencia, id:number): Observable<any>{
    return this.http.put<Experiencia[]>(this.url + `/editar/${id}`, expe)
  }
}
