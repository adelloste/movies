import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PopularTvService }             from './services/popular-tv.service';
import { PopularTvResolverService }     from './services/popular-tv-resolver.service';
import { TopRatedTvService }            from './services/top-rated-tv.service';
import { TopRatedTvResolverService }    from './services/top-rated-tv-resolver.service';
import { AiringTodayTvService }         from './services/airing-today-tv.service';
import { AiringTodayTvResolverService } from './services/airing-today-tv-resolver.service';
import { OnTheAirTvService }            from './services/on-the-air-tv.service';
import { OnTheAirTvResolverService }    from './services/on-the-air-tv-resolver.service';

import { TvComponent }     from './tv.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    TvComponent,
    SliderComponent
  ],
  providers: [
    PopularTvService,
    PopularTvResolverService,
    TopRatedTvService,
    TopRatedTvResolverService,
    AiringTodayTvService,
    AiringTodayTvResolverService,
    OnTheAirTvService,
    OnTheAirTvResolverService
  ]
})
export class TvModule { }
