import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieDetailComponent }        from './movie-detail.component';
import { MovieService }                from './services/movie.service';
import { MovieCreditsService }         from './services/movie-credits.service';
import { MovieResolverService }        from './services/movie-resolver.service';
import { MovieCreditsResolverService } from './services/movie-credits-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MovieDetailComponent
  ],
  providers: [
    MovieService,
    MovieCreditsService,
    MovieResolverService,
    MovieCreditsResolverService
  ]
})
export class MovieModule { }
