import { Component, OnInit } from '@angular/core';

import { Rat } from "./rat"

import { RatsService } from "./rats.service"

@Component({
  selector: 'app-rats',
  templateUrl: './rats.component.html',
  styleUrls: ['./rats.component.css']
})
export class RatsComponent implements OnInit {
  all_rats: Array<Rat>
  selected_rat: Rat

  constructor(private rats_service: RatsService) { }

  ngOnInit() {
    this.get_all_rats()
  }

  get_all_rats(){
    this.rats_service.get_rats()
      .then((rats) => this.all_rats = rats)
  }

  create_rat(new_rat: Rat){
    this.rats_service.create_rat(new_rat)
      .then(() => { this.get_all_rats() } )
      .catch(err => console.log("There's an error?", err))
  }

  select_rat(rat: Rat){
    if(rat == this.selected_rat){
      this.selected_rat = undefined
    } else {
      this.selected_rat = rat
    }
  }

}
