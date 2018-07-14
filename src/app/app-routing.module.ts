import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Page1Component } from './login/page1/page1.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login/page1', component: Page1Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

