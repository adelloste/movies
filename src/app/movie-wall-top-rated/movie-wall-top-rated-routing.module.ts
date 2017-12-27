import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieWallTopRatedComponent } from './movie-wall-top-rated.component';

import { TopRatedResolverService } from './services/top-rated-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: MovieWallTopRatedComponent,
        resolve: {
          topRatedMovie: TopRatedResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class MovieWallTopRatedRoutingModule { }
