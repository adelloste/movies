import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvWallOnTheAirComponent } from './tv-wall-on-the-air.component';

import { OnTheAirTvResolverService } from './services/on-the-air-tv-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: TvWallOnTheAirComponent,
        resolve: {
          onTheAirTV: OnTheAirTvResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class TvWallOnTheAirRoutingModule { }
