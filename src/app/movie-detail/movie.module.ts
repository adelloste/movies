import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieDetailComponent }               from './movie-detail.component';
import { MovieService }                       from './services/movie.service';
import { MovieCreditsService }                from './services/movie-credits.service';
import { MovieRecommendationService }         from './services/movie-recommendation.service';
import { MovieResolverService }               from './services/movie-resolver.service';
import { MovieCreditsResolverService }        from './services/movie-credits-resolver.service';
import { MovieRecommendationResolverService } from './services/movie-recommendation-resolver.service';
import { CardActorComponent }                 from './components/card-actor/card-actor.component';
import { RatingComponent }                    from './components/rating/rating.component';
import { CardRecommendationComponent }        from './components/card-recommendation/card-recommendation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MovieDetailComponent,
    CardActorComponent,
    RatingComponent,
    CardRecommendationComponent
  ],
  providers: [
    MovieService,
    MovieCreditsService,
    MovieRecommendationService,
    MovieResolverService,
    MovieCreditsResolverService,
    MovieRecommendationResolverService
  ]
})
export class MovieModule { }
