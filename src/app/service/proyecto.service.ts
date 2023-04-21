import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidades/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url: string = "https://portfolioback-feviro.koyeb.app/proyecto";

  constructor(private http:HttpClient) { }

  public list(): Observable<Proyecto[]>{

    return this.http.get<Proyecto[]>(this.url + '/lista');
  }

  public verProyecto(id:number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url + `/ver/${id}`) 
  }

  public agregarProyecto(proye: Proyecto): Observable<any>{
    return this.http.post<any>(this.url + '/crear', proye);
  }

  public borrarProyecto(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`)
  }

  public editarProyecto(proye:Proyecto, id:number): Observable<any>{
    return this.http.put<any>(this.url + `/editar/${id}`, proye)
  }
}