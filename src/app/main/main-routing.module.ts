import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

import { InfoComponent }   from '../info/info.component';
import { MoviesComponent } from '../movies/movies.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path: 'main',
        component: MainComponent,
        children: [
          {
            path: '', 
            redirectTo: 'info', 
            pathMatch: 'full' 
          },
          {
            path: 'info',
            component: InfoComponent
          },
          {
            path: 'movies',
            component: MoviesComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class MainRoutingModule { }

