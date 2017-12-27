import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvWallAiringTodayComponent } from './tv-wall-airing-today.component';

import { AiringTodayTvResolverService } from './services/airing-today-tv-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: TvWallAiringTodayComponent,
        resolve: {
          airingTodayTV: AiringTodayTvResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class TvWallAiringTodayRoutingModule { }
