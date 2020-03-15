import { Component, OnInit, ViewChild, Input, Injectable } from '@angular/core';
import { ModalComponent, ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-common-modal',
  template: '<modal><modal-header>Modal as a component</modal-header><modal-content><span>{{data}}</span>Modal body content goes there.</modal-content><modal-footer>Modal footer content goes there.</modal-footer></modal>'
})

export class CommonModalComponent implements OnInit {
  ngOnInit() {}
}
export class ModalComp{
  @ViewChild(ModalComponent) ModalComponent;
  @Input() data;
}

export class MyModalComponent{
  private modalRef;
  constructor(private modalService : ModalManager){}

  openModal(){
    this.modalRef = this.modalService.open(ModalComp, {
      size: "md",
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop"
    });
    this.modalRef['data'] = "any data you want to pass to ModalComp class";
    this.modalRef.onOpen.subscribe(() => {
        console.log("comp opened");
    })
    this.modalRef.onClose.subscribe(() => {
        console.log("comp closed");
    })
  }

  closeModal(){
    this.modalService.close(this.modalRef);
    //or this.modalRef.close();
  }
}
