import { PagerService } from './../pager.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  //public blog={
    //post : []
  //};
  blog: any = {};
  allItems: any[];
  pages: any[];
  pageSize = 3;
  pager: any = {};
  constructor(private config:ConfigService, private PagerService: PagerService) { }

  ngOnInit() {
    this.blog = this.getBlog();
    this.allItems = this.blog.post;
    this.setPage(1);
    //console.log(this.blog.post)
  }

  getBlog(){
    return this.config.getConfig().blog;
  }

  setPage(pageNumber: number){
  //create a pager using paging service
  this.pager = this.PagerService.getPager(this.allItems.length, pageNumber, this.pageSize);

  //
  this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
