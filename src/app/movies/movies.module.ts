import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { MoviesComponent } from './movies.component';
import { CardComponent }   from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    MoviesComponent,
    CardComponent
  ]
})
export class MoviesModule { }
