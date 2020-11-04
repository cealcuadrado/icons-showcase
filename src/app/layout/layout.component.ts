import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [NgbPopoverConfig]
})
export class LayoutComponent implements OnInit {

  constructor(
    public modal: NgbModal,
  ) {
  }

  ngOnInit() {

  }

  openModal() {
    this.modal.open(ModalComponent)
      .result
      .then(foo => {
        console.log(foo);
      })
      .catch(foo => {
        console.log(foo);
      });
  }
}
