import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients = {};

  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.clients = this.getClients();
  }

  getClients(){
    return this.config.getConfig().clients;
  }

}
