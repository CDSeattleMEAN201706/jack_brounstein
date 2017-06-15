import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Rat } from "./../rat"

@Component({
  selector: 'app-rats-create',
  templateUrl: './rats-create.component.html',
  styleUrls: ['./rats-create.component.css']
})
export class RatsCreateComponent implements OnInit {
  new_rat: Rat = new Rat
  @Output() create_rat_event = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  create_rat() {
    this.create_rat_event.emit(this.new_rat)
    this.new_rat = new Rat
  }

}
