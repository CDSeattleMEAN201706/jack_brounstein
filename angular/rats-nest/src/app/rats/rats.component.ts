import { Component, OnInit } from '@angular/core';

import { Rat } from "./rat"

@Component({
  selector: 'app-rats',
  templateUrl: './rats.component.html',
  styleUrls: ['./rats.component.css']
})
export class RatsComponent implements OnInit {
  all_rats: Array<Rat>
  selected_rat: Rat

  constructor() { }

  ngOnInit() {
    this.all_rats = [
      {name: "Squeaker", age: 2, favorite_food: "Cheese"},
      {name: "Rat the Rat", age: 4, favorite_food: "Peanut butter"},
      {name: "Ben", age: 25, favorite_food: "Not human flesh"},
    ]
  }

  create_rat(new_rat: Rat){
    this.all_rats.push(new_rat)
  }

  select_rat(rat: Rat){
    if(rat == this.selected_rat){
      this.selected_rat = undefined
    } else {
      this.selected_rat = rat
    }
  }

}
