import { NgModule } from '@angular/core';

import { SharedModule }                  from '../shared/shared.module';
import { MovieWallPopularRoutingModule } from './movie-wall-popular-routing.module';

import { PopularMovieResolverService } from './services/popular-movie-resolver.service';

import { MovieWallPopularComponent } from './movie-wall-popular.component';

@NgModule({
  imports: [
    SharedModule,
    MovieWallPopularRoutingModule
  ],
  declarations: [
    MovieWallPopularComponent
  ],
  providers: [
    PopularMovieResolverService
  ]
})
export class MovieWallPopularModule { }
