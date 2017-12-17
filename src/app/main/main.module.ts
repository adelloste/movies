import { NgModule } from '@angular/core';

import { SharedModule }      from '../shared/shared.module';
import { MainGuard }         from './main.guard';
import { MainRoutingModule } from './main-routing.module';

import { MoviesModule } from '../movies/movies.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule,
    MoviesModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [
    MainGuard
  ]
})
export class MainModule { }
