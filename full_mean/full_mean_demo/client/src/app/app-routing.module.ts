import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from "./users/users.component"
import { HamburgersComponent } from "./hamburgers/hamburgers.component"

const routes: Routes = [
  { path: "login", component: UsersComponent },
  { path: "hamburgers", component: HamburgersComponent },
  { path: "", pathMatch: "full", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
