import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TvWallAiringTodayRoutingModule } from './tv-wall-airing-today-routing.module';

import { AiringTodayTvResolverService } from './services/airing-today-tv-resolver.service';

import { TvWallAiringTodayComponent } from './tv-wall-airing-today.component';

@NgModule({
  imports: [
    SharedModule,
    TvWallAiringTodayRoutingModule
  ],
  declarations: [
    TvWallAiringTodayComponent
  ],
  providers: [
    AiringTodayTvResolverService
  ]
})
export class TvWallAiringTodayModule { }
