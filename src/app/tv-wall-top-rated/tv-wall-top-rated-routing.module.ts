import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvWallTopRatedComponent } from './tv-wall-top-rated.component';

import { TopRatedTvResolverService } from './services/top-rated-tv-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: TvWallTopRatedComponent,
        resolve: {
          topRatedTV: TopRatedTvResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class TvWallTopRatedRoutingModule { }
