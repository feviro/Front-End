import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AcercaDeServiceService {

  constructor(private http:HttpClient) { }

  getDatos(): Observable<any> {

    return this.http.get('./assets/db.json');
  
  }
}


