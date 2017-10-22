import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { TvDetailComponent }                from './tv-detail.component';
import { TvDetailService }                  from './services/tv-detail.service';
import { TvDetailResolverService }          from './services/tv-detail-resolver.service';
import { TvCreditsService }                 from './services/tv-credits.service';
import { TvCreditsResolverService }         from './services/tv-credits-resolver.service';
import { TvSimilarService }                 from './services/tv-similar.service';
import { TvSimilarResolverService }         from './services/tv-similar-resolver.service';
import { TvRecommendationsService }         from './services/tv-recommendations.service';
import { TvRecommendationsResolverService } from './services/tv-recommendations-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    TvDetailComponent
  ],
  providers: [
    TvDetailService,
    TvDetailResolverService,
    TvCreditsService,
    TvCreditsResolverService,
    TvSimilarService,
    TvSimilarResolverService,
    TvRecommendationsService,
    TvRecommendationsResolverService
  ]
})
export class TvDetailModule { }
