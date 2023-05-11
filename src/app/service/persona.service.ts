import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url: string = "https://backend-feviro.koyeb.app/persona";

  constructor(private http:HttpClient) { }

  public list(): Observable<Persona[]>{

    return this.http.get<Persona[]>(this.url + '/lista');
  }

  public verPersona(id:number): Observable<Persona>{
    return this.http.get<Persona>(this.url + `/ver/${id}`) 
  }

  public agregarPersona(perso: Persona): Observable<any>{
    return this.http.post<any>(this.url + '/crear', perso);
  }

  public borrarPersona(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`)
  }

  public editarPersona(perso: Persona, id:number): Observable<any>{
    return this.http.put<any>(this.url + `/editar/${id}`, perso)
  }
}
