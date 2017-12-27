import { NgModule } from '@angular/core';

import { SharedModule }                from '../shared/shared.module';
import { TvWallTopRatedRoutingModule } from './tv-wall-top-rated-routing.module';

import { TopRatedTvResolverService } from './services/top-rated-tv-resolver.service';

import { TvWallTopRatedComponent } from './tv-wall-top-rated.component';

@NgModule({
  imports: [
    SharedModule,
    TvWallTopRatedRoutingModule
  ],
  declarations: [
    TvWallTopRatedComponent
  ],
  providers: [
    TopRatedTvResolverService
  ]
})
export class TvWallTopRatedModule { }
