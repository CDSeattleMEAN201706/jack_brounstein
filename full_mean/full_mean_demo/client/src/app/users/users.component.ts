import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./user"
import { UserService } from "./user.service"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user_name: string

  constructor( private user_service: UserService, private router: Router ) { }

  ngOnInit() {
  }

  login(){
    this.user_service.login(this.user_name)
      .then(() => { this.router.navigate(["/hamburgers"]) })
      .catch(() => console.log("Couldn't log in"))

    this.user_name = ""
  }

}
