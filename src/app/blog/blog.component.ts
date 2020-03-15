import { PagerService } from './../pager.service';
import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { ModalComponent } from 'ngb-modal';
import { ModalComp } from 'src/app/common-modal/common-modal.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild(ModalComponent) ModalComponent;
  //public blog={
    //post : []
  //};
  blog: any = {};
  allItems: any[];
  pages: any[];
  pageSize = 3;
  pager: any = {};
  data:string = "This is Blog ModalPopup";
  constructor(private config:ConfigService, private PagerService: PagerService) { }

  ngOnInit() {
    this.blog = this.getBlog();
    this.allItems = this.blog.post;
    this.setPage(1);

    this.openModalView();
  }

  getBlog(){
    return this.config.getConfig().blog;
  }

  openModalView(){
    //return this.myCommonModal.openModal();
  }

  setPage(pageNumber: number){
  //create a pager using paging service
  this.pager = this.PagerService.getPager(this.allItems.length, pageNumber, this.pageSize);

  //Current page posts
  this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
