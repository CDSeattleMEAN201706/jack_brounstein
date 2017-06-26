import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private url = "http://localhost:8000"
  private socket

  constructor() { }

  get_clicks(){
    let observable = new Observable(observer => {
      this.socket = io(this.url)

      this.socket.on("update_count", (data) => {
        observer.next(data)
      })

      return () => {
        this.socket.disconnect()
      }
    })

    return observable
  }

  click_button(){
    this.socket.emit("click_button")
  }
}
