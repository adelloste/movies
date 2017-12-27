import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies.component';

import { PopularMoviesResolverService } from './services/popular-movies-resolver.service';
import { TopRatedResolverService }      from './services/top-rated-resolver.service';
import { NowPlayingResolverService }    from './services/now-playing-resolver.service';
import { UpcomingResolverService }      from './services/upcoming-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: MoviesComponent,
        resolve: {
          popularMovies    : PopularMoviesResolverService,
          nowPlayingMovies : TopRatedResolverService,
          topRatedMovies   : NowPlayingResolverService,
          upcomingMovies   : UpcomingResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class MoviesRoutingModule { }
