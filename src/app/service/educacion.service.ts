import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url: string = "https://portfolioback-feviro.koyeb.app/educacion";

  constructor(private http:HttpClient) { }

  public list(): Observable<Educacion[]>{

    return this.http.get<Educacion[]>(this.url + '/lista');
  }

  public verEducacion(id:any): Observable<any>{
    return this.http.get<Educacion[]>(this.url + `/ver/${id}`) 
  }

  public agregarEducacion(educ :Educacion): Observable<any>{
    return this.http.post<any>(this.url + '/crear', educ);
  }

  public borrarEducacion(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`)
  }

  public editarEducacion(edu: Educacion, id:number): Observable<any>{
    return this.http.put<Educacion[]>(this.url + `/editar/${id}`, edu)
  }
}
