import { Component, OnInit } from '@angular/core';

import * as io from "socket.io-client"

import { SocketService } from "./../socket.service"

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']
})
export class ClicksComponent implements OnInit {
  clicks = 0
  socket = null

  constructor( private socket_service: SocketService ) { }

  ngOnInit() {
    this.socket_service.get_clicks().subscribe((number_of_clicks) => this.clicks = Number(number_of_clicks) )
  }

  click_button(){
    this.socket_service.click_button()
  }

}
