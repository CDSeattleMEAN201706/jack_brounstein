import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"

@Injectable()
export class UserService {
  
  constructor( private http: Http ) { }

  login(name: string){
    return this.http.post("/login", {name: name}).toPromise()
  }

  check_status(){
    return this.http.get("/check_status")
            .map(data => data.json())
            .toPromise()
  }

}
