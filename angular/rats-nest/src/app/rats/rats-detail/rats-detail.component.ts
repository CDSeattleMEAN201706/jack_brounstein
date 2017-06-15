import { Component, OnInit, Input } from '@angular/core';

import { Rat } from "./../rat"

@Component({
  selector: 'app-rats-detail',
  templateUrl: './rats-detail.component.html',
  styleUrls: ['./rats-detail.component.css']
})
export class RatsDetailComponent implements OnInit {
  @Input() this_rat: Rat
  @Input() other: number

  constructor() { }

  ngOnInit() {
  }

}
