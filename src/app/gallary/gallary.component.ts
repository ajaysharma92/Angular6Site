import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
gallery={};
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.gallery = this.getGallery();
  }
  getGallery(){
    return this.config.getConfig().gallery;
  }

}
