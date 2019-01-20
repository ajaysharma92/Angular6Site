import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blog={
    //post : []
  };
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.blog = this.getBlog();
    //console.log(this.blog.post)
  }

  getBlog(){
    return this.config.getConfig().blog;
  }
}
