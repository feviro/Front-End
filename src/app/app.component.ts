import { Component, Input } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendPortafolioWeb';
  

  constructor(private modal:ModalService){}

  ngOnInit(){
  
  }


}
