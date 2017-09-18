import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }              from './main.component';
import { MainGuard }                  from './main.guard';
import { InfoComponent }              from '../info/info.component';
import { MoviesComponent }            from '../movies/movies.component';
import { MovieDetailComponent }       from '../movie-detail/movie-detail.component';
import { TvComponent }                from '../tv/tv.component';
import { TvDetailComponent }          from '../tv-detail/tv-detail.component';
import { TvWallPopularComponent }     from '../tv-wall-popular/tv-wall-popular.component';
import { TvWallTopRatedComponent }    from '../tv-wall-top-rated/tv-wall-top-rated.component';
import { TvWallOnTheAirComponent }    from '../tv-wall-on-the-air/tv-wall-on-the-air.component';
import { TvWallAiringTodayComponent } from '../tv-wall-airing-today/tv-wall-airing-today.component';

import { MovieResolverService }               from '../movie-detail/services/movie-resolver.service';
import { MovieCreditsResolverService }        from '../movie-detail/services/movie-credits-resolver.service';
import { MovieRecommendationResolverService } from '../movie-detail/services/movie-recommendation-resolver.service';

import { PopularTvResolverService }     from '../tv/services/popular-tv-resolver.service';
import { TopRatedTvResolverService }    from '../tv/services/top-rated-tv-resolver.service';
import { AiringTodayTvResolverService } from '../tv/services/airing-today-tv-resolver.service';
import { OnTheAirTvResolverService }    from '../tv/services/on-the-air-tv-resolver.service';

import { TvDetailResolverService }    from '../tv-detail/services/tv-detail-resolver.service';

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
            path: 'tv',
            component: TvComponent,
            resolve: {
              popularTVs: PopularTvResolverService,
              topRatedTVs: TopRatedTvResolverService,
              airingTodayTVs: AiringTodayTvResolverService,
              onTheAirTVs: OnTheAirTvResolverService
            }
          },
          {
            path: 'tv/:id',
            component: TvDetailComponent,
            resolve: {
              detailTV: TvDetailResolverService
            }
          },
          {
            path: 'tv/wall/popular',
            component: TvWallPopularComponent,
            resolve: {
              popularTV: PopularTvResolverService
            }
          },
          {
            path: 'tv/wall/toprated',
            component: TvWallTopRatedComponent,
            resolve: {
              topRatedTV: TopRatedTvResolverService
            }
          },
          {
            path: 'tv/wall/airingtoday',
            component: TvWallAiringTodayComponent,
            resolve: {
              airingTodayTV: AiringTodayTvResolverService
            }
          },
          {
            path: 'tv/wall/ontheair',
            component: TvWallOnTheAirComponent,
            resolve: {
              onTheAirTV: OnTheAirTvResolverService
            }
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

