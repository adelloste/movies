import { NgModule }     from '@angular/core';

import { SharedModule }    from '../shared/shared.module';
import { TvRoutingModule } from './tv-routing.module';

import { PopularTvResolverService }     from './services/popular-tv-resolver.service';
import { TopRatedTvResolverService }    from './services/top-rated-tv-resolver.service';
import { AiringTodayTvResolverService } from './services/airing-today-tv-resolver.service';
import { OnTheAirTvResolverService }    from './services/on-the-air-tv-resolver.service';

import { TvComponent } from './tv.component';

@NgModule({
  imports: [
    SharedModule,
    TvRoutingModule
  ],
  declarations: [
    TvComponent
  ],
  providers: [
    PopularTvResolverService,
    TopRatedTvResolverService,
    AiringTodayTvResolverService,
    OnTheAirTvResolverService
  ]
})
export class TvModule { }
