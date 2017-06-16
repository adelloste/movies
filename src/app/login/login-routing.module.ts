import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  declarations: []
})
export class LoginRoutingModule { }