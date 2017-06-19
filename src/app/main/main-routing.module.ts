import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }        from './main.component';
import { MainGuard }            from './main.guard';
import { InfoComponent }        from '../info/info.component';
import { MoviesComponent }      from '../movies/movies.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

import { MovieResolverService } from '../movie-detail/services/movie-resolver.service';
import { MovieCreditsResolverService } from '../movie-detail/services/movie-credits-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path: 'main',
        component: MainComponent,
        canActivate: [ MainGuard ],
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
          },
          {
            path: 'movies/:id',
            component: MovieDetailComponent,
            resolve: {
              movie: MovieResolverService,
              credits: MovieCreditsResolverService
            }
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

