import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { observable } from 'rxjs';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  btnSwitch: boolean = false;
  @Output() btnclick = new EventEmitter(this.btnSwitch);

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }

  OnContact(): void{
   this.modal.$modal.emit(true);

  }

}
