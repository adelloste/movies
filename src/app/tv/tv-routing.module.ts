import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AiringTodayTvResolverService } from './services/airing-today-tv-resolver.service';
import { OnTheAirTvResolverService }    from './services/on-the-air-tv-resolver.service';
import { PopularTvResolverService }     from './services/popular-tv-resolver.service';
import { TopRatedTvResolverService }    from './services/top-rated-tv-resolver.service';

import { TvComponent } from './tv.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: TvComponent,
        resolve: {
          popularTVs     : PopularTvResolverService,
          topRatedTVs    : TopRatedTvResolverService,
          airingTodayTVs : AiringTodayTvResolverService,
          onTheAirTVs    : OnTheAirTvResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class TvRoutingModule { }
