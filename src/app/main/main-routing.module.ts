import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { MainGuard }     from './main.guard';

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
            path: 'movie',
            loadChildren: '../movies/movies.module#MoviesModule'
          },
          {
            path: 'movie/:id',
            loadChildren: '../movie-detail/movie-detail.module#MovieDetailModule'
          },
          {
            path: 'movie/wall/popular',
            loadChildren: '../movie-wall-popular/movie-wall-popular.module#MovieWallPopularModule'
          },
          {
            path: 'movie/wall/toprated',
            loadChildren: '../movie-wall-top-rated/movie-wall-top-rated.module#MovieWallTopRatedModule'
          },
          {
            path: 'movie/wall/upcoming',
            loadChildren: '../movie-wall-upcoming/movie-wall-upcoming.module#MovieWallUpcomingModule'
          },
          {
            path: 'movie/wall/nowplaying',
            loadChildren: '../movie-wall-now-playing/movie-wall-now-playing.module#MovieWallNowPlayingModule'
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

