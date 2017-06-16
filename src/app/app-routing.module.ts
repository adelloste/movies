import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      // {
      //   path: '**',
      //   component: PageNotFoundComponent 
      // }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }