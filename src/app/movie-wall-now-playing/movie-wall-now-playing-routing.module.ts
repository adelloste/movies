import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieWallNowPlayingComponent } from './movie-wall-now-playing.component';

import { NowPlayingResolverService } from './services/now-playing-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: MovieWallNowPlayingComponent,
        resolve: {
          nowPlayingMovie: NowPlayingResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class MovieWallNowPlayingRoutingModule { }
