import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../entidades/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url: string = "https://back-end-production-30b9.up.railway.app/contacto";

  constructor(private http:HttpClient) { }

  public list(): Observable<Contacto[]>{

    return this.http.get<Contacto[]>(this.url + '/lista');
  }

  public verContacto(id:any): Observable<any>{
    return this.http.get<Contacto[]>(this.url + `/ver/${id}`) 
  }

  public agregarContacto(contac :Contacto): Observable<any>{
    return this.http.post<any>(this.url + '/crear', contac);
  }

  public borrarContacto(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`)
  }

  public editarContacto(contac: Contacto, id:number): Observable<any>{
    return this.http.put<Contacto[]>(this.url + `/editar/${id}`, contac)
  }
}

