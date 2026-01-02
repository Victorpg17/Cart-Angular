import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-global-modal',
  templateUrl: './global-modal.component.html',
  styleUrls: ['./global-modal.component.css']
})

export class GlobalModalComponent {
  @ViewChild('modal') modal: any;

  open() {
    this.modal.show();
  }

  close() {
    this.modal.hide();
  }
}
