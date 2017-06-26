import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClicksComponent } from './clicks/clicks.component';

import { SocketService } from "./socket.service"

@NgModule({
  declarations: [
    AppComponent,
    ClicksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
