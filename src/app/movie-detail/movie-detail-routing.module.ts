import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieResolverService }               from './services/movie-resolver.service';
import { MovieCreditsResolverService }        from './services/movie-credits-resolver.service';
import { MovieSimilarResolverService }        from './services/movie-similar-resolver.service';
import { MovieRecommendationResolverService } from './services/movie-recommendation-resolver.service';
import { MovieVideosResolverService }         from './services/movie-videos-resolver.service';

import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: MovieDetailComponent,
        resolve: {
          detail          : MovieResolverService,
          credits         : MovieCreditsResolverService,
          similars        : MovieSimilarResolverService,
          recommendations : MovieRecommendationResolverService,
          videos          : MovieVideosResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class MovieDetailRoutingModule { }
