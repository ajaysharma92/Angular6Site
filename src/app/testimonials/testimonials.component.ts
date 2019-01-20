import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonilas={};
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.testimonilas = this.getTestimonials();
  }
  getTestimonials(){
    return this.config.getConfig().testimonilas;
  }

}
