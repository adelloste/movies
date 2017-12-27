import { NgModule }     from '@angular/core';

import { SharedModule }                     from '../shared/shared.module';
import { MovieWallNowPlayingRoutingModule } from './movie-wall-now-playing-routing.module';

import { NowPlayingResolverService } from './services/now-playing-resolver.service';

import { MovieWallNowPlayingComponent } from './movie-wall-now-playing.component';

@NgModule({
  imports: [
    SharedModule,
    MovieWallNowPlayingRoutingModule
  ],
  declarations: [
    MovieWallNowPlayingComponent
  ],
  providers: [
    NowPlayingResolverService
  ]
})
export class MovieWallNowPlayingModule { }
