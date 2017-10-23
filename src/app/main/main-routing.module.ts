import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }        from './main.component';
import { MainGuard }            from './main.guard';
import { MoviesComponent }      from '../movies/movies.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

import { MovieResolverService }               from '../movie-detail/services/movie-resolver.service';
import { MovieCreditsResolverService }        from '../movie-detail/services/movie-credits-resolver.service';
import { MovieRecommendationResolverService } from '../movie-detail/services/movie-recommendation-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: MainComponent,
        canActivate: [ MainGuard ],
        children: [
          {
            path: 'info',
            loadChildren: '../info/info.module#InfoModule'
          },
          {
            path: 'tv',
            loadChildren: '../tv/tv.module#TvModule'
          },
          {
            path: 'tv/:id',
            loadChildren: '../tv-detail/tv-detail.module#TvDetailModule'
          },
          {
            path: 'tv/wall/popular',
            loadChildren: '../tv-wall-popular/tv-wall-popular.module#TvWallPopularModule'
          },
          {
            path: 'tv/wall/toprated',
            loadChildren: '../tv-wall-top-rated/tv-wall-top-rated.module#TvWallTopRatedModule'
          },
          {
            path: 'tv/wall/airingtoday',
            loadChildren: '../tv-wall-airing-today/tv-wall-airing-today.module#TvWallAiringTodayModule'
          },
          {
            path: 'tv/wall/ontheair',
            loadChildren: '../tv-wall-on-the-air/tv-wall-on-the-air.module#TvWallOnTheAirModule'
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
              credits: MovieCreditsResolverService,
              recommendation: MovieRecommendationResolverService
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

