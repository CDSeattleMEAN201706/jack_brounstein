import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { UserService } from "./../users/user.service"

@Component({
  selector: 'app-hamburgers',
  templateUrl: './hamburgers.component.html',
  styleUrls: ['./hamburgers.component.css']
})
export class HamburgersComponent implements OnInit {
  user_name: string

  constructor( private user_service: UserService, private router: Router ) { 
    this.user_service.check_status()
      .then(data => this.user_name = data)
      .catch(() => this.router.navigate(["/login"]) )
  }

  ngOnInit() {    
  }

}
