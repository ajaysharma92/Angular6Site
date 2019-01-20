import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { config } from 'rxjs';

@Component({
  selector: 'app-pricingtable',
  templateUrl: './pricingtable.component.html',
  styleUrls: ['./pricingtable.component.css']
})
export class PricingtableComponent implements OnInit {
pricing={};
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.pricing = this.getPricing();
  }
getPricing(){
  return this.config.getConfig().pricing;
}
}
