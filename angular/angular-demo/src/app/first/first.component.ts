import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  something_else:any = "Jack"
  cool_bros: string[]
  right_now: Date
  constructor() { }

  ngOnInit() {
    this.something_else = 7
    this.cool_bros = ["Mike", "Lewis", "Crusher"]
    this.right_now = new Date()
  }

}
