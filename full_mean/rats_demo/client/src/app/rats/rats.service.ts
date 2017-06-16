import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"

import { Rat } from "./rat"

@Injectable()
export class RatsService {

  constructor(private http: Http) { }

  get_rats(){
    return this.http.get("/rats")
            .map(data => data.json())
            .toPromise()
  }

  create_rat(new_rat: Rat){
    return this.http.post("/rats/create", new_rat)
            .map(data => data.json())
            .toPromise()
  }

}
