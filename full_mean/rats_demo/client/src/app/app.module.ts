import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RatsComponent } from './rats/rats.component';
import { RatsDetailComponent } from './rats/rats-detail/rats-detail.component';
import { RatsCreateComponent } from './rats/rats-create/rats-create.component';
import { FilterPipe } from './rats/filter.pipe';

import { RatsService } from "./rats/rats.service"

@NgModule({
  declarations: [
    AppComponent,
    RatsComponent,
    RatsDetailComponent,
    RatsCreateComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
