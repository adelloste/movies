import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvDetailResolverService }          from './services/tv-detail-resolver.service';
import { TvCreditsResolverService }         from './services/tv-credits-resolver.service';
import { TvSimilarResolverService }         from './services/tv-similar-resolver.service';
import { TvRecommendationsResolverService } from './services/tv-recommendations-resolver.service';

import { TvDetailComponent } from './tv-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: TvDetailComponent,
        resolve: {
          detailTV          : TvDetailResolverService,
          creditsTV         : TvCreditsResolverService,
          similarTV         : TvSimilarResolverService,
          recommendationsTV : TvRecommendationsResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class TvDetailRoutingModule { }
