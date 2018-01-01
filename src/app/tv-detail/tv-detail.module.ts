import { NgModule }     from '@angular/core';

import { SharedModule }          from '../shared/shared.module';
import { TvDetailRoutingModule } from './tv-detail-routing.module';

import { TvDetailComponent }                from './tv-detail.component';
import { TvDetailService }                  from './services/tv-detail.service';
import { TvDetailResolverService }          from './services/tv-detail-resolver.service';
import { TvCreditsService }                 from './services/tv-credits.service';
import { TvCreditsResolverService }         from './services/tv-credits-resolver.service';
import { TvSimilarService }                 from './services/tv-similar.service';
import { TvSimilarResolverService }         from './services/tv-similar-resolver.service';
import { TvRecommendationsService }         from './services/tv-recommendations.service';
import { TvRecommendationsResolverService } from './services/tv-recommendations-resolver.service';
import { TvVideosService }                  from './services/tv-videos.service';
import { TvVideosResolverService }          from './services/tv-videos-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    TvDetailRoutingModule
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
    TvRecommendationsResolverService,
    TvVideosService,
    TvVideosResolverService
  ]
})
export class TvDetailModule { }
