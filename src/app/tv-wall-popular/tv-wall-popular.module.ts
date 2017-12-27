import { NgModule } from '@angular/core';

import { SharedModule }               from '../shared/shared.module';
import { TvWallPopularRoutingModule } from './tv-wall-popular-routing.module';

import { PopularTvResolverService } from './services/popular-tv-resolver.service';

import { TvWallPopularComponent } from './tv-wall-popular.component';

@NgModule({
  imports: [
    SharedModule,
    TvWallPopularRoutingModule
  ],
  declarations: [
    TvWallPopularComponent
  ],
  providers: [
    PopularTvResolverService
  ]
})
export class TvWallPopularModule { }
