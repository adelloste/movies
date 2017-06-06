import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule}   from '@angular/router';

import {MoviesRoutingModule} from './movies-routing.module';
import {SharedModule}        from '../shared/shared.module';

import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent
  ]
})
export class MoviesModule { }
