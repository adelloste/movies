import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieWallPopularComponent } from './movie-wall-popular.component';

import { PopularMovieResolverService } from './services/popular-movie-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: MovieWallPopularComponent,
        resolve: {
          popularMovie: PopularMovieResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class MovieWallPopularRoutingModule { }
