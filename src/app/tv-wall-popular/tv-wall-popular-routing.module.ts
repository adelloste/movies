import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvWallPopularComponent } from './tv-wall-popular.component';

import { PopularTvResolverService } from './services/popular-tv-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: TvWallPopularComponent,
        resolve: {
          popularTV: PopularTvResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class TvWallPopularRoutingModule { }
