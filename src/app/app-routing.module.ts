import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/movies',
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