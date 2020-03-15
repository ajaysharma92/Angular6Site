import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'My Angular6Site App';

  constructor(private modalService : ModalManager, private vcr : ViewContainerRef){
    this.modalService.setDefaults({
        title: "new modal",
        size: "sm",
        modalClass: 'mymodal',
        hideCloseButton: true,
        centered: false,
        backdrop: true,
        animation: true,
        keyboard: true,
        closeOnOutsideClick: true,
        backdropClass: "modal-backdrop"
    })
    this.modalService.setRootViewContainerRef(this.vcr);
  }
}
