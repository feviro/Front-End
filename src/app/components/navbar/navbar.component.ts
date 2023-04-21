import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/entidades/admin';
import { LoginService } from 'src/app/service/login.service';
import { ModalService } from 'src/app/service/modal.service';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loged: boolean = false;
  redes: any;

  constructor(private modal: ModalService, private http:AcercaDeServiceService,
    private loginS:LoginService) { }

  ngOnInit(): void {
    let data = this.loginS.estaLogueado();
    this.loged = data;
  }
  showModal(){
    this.modal.$modal.emit(true)
  }
  showLogin(){
    this.modal.$login.emit(true)
  }

  logueado(){
    var data 
    data = window.localStorage.getItem(this.loginS.logueado);
    if (data === "true"){
      return true;
    }
    else{
      return false;
    }
    }

    deslogueado(){
     this.loginS.logout();
     window.location.reload();
    }

}
