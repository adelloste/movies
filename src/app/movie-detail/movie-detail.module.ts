import { NgModule }     from '@angular/core';

import { SharedModule }             from '../shared/shared.module';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

import { MovieService }                       from './services/movie.service';
import { MovieCreditsService }                from './services/movie-credits.service';
import { MovieSimilarService }                from './services/movie-similar.service';
import { MovieRecommendationService }         from './services/movie-recommendation.service';

import { MovieResolverService }               from './services/movie-resolver.service';
import { MovieCreditsResolverService }        from './services/movie-credits-resolver.service';
import { MovieSimilarResolverService }        from './services/movie-similar-resolver.service';
import { MovieRecommendationResolverService } from './services/movie-recommendation-resolver.service';

import { MovieDetailComponent } from './movie-detail.component';
import { RatingComponent }      from './components/rating/rating.component';

@NgModule({
  imports: [
    SharedModule,
    MovieDetailRoutingModule
  ],
  declarations: [
    MovieDetailComponent,
    RatingComponent
  ],
  providers: [
    MovieService,
    MovieCreditsService,
    MovieSimilarService,
    MovieRecommendationService,
    MovieResolverService,
    MovieCreditsResolverService,
    MovieSimilarResolverService,
    MovieRecommendationResolverService
  ]
})
export class MovieDetailModule { }
