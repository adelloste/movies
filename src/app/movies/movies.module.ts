import { NgModule } from '@angular/core';

import { SharedModule }        from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesComponent } from './movies.component';

import { PopularMoviesResolverService } from './services/popular-movies-resolver.service';
import { UpcomingResolverService }      from './services/upcoming-resolver.service';
import { TopRatedResolverService }      from './services/top-rated-resolver.service';
import { NowPlayingResolverService }    from './services/now-playing-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent
  ],
  providers: [
    PopularMoviesResolverService,
    UpcomingResolverService,
    TopRatedResolverService,
    NowPlayingResolverService
  ]
})
export class MoviesModule { }
