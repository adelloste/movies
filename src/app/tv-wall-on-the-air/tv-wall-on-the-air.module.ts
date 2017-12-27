import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TvWallOnTheAirRoutingModule } from './tv-wall-on-the-air-routing.module';

import { OnTheAirTvResolverService } from './services/on-the-air-tv-resolver.service';

import { TvWallOnTheAirComponent } from './tv-wall-on-the-air.component';

@NgModule({
  imports: [
    SharedModule,
    TvWallOnTheAirRoutingModule
  ],
  declarations: [
    TvWallOnTheAirComponent
  ],
  providers: [
    OnTheAirTvResolverService
  ]
})
export class TvWallOnTheAirModule { }
