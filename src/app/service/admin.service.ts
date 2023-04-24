import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../entidades/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url: string = "https://back-end-production-30b9.up.railway.app/admin";

  constructor(private http:HttpClient) { }

  public list(): Observable<Admin[]>{

    return this.http.get<Admin[]>(this.url + '/lista');
  }

  public verAdmin(id:any): Observable<any>{
    return this.http.get<Admin[]>(this.url + `/ver/${id}`) 
  }

  public agregarAdmin(adm: Admin): Observable<any>{
    return this.http.post<any>(this.url + '/crear', adm);
  }

  public borrarAdmin(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`)
  }

  public editarAdmin(adm: Admin, id:number): Observable<any>{
    return this.http.put<Admin[]>(this.url + `/editar/${id}`, adm)
  }
}