import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path: 'movies',
        component: MoviesComponent 
      }
    ])
  ],
  declarations: []
})
export class MoviesRoutingModule { }
