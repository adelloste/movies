import { NgModule } from '@angular/core';

import { SharedModule }                   from '../shared/shared.module';
import { MovieWallTopRatedRoutingModule } from './movie-wall-top-rated-routing.module';

import { TopRatedResolverService } from './services/top-rated-resolver.service';

import { MovieWallTopRatedComponent } from './movie-wall-top-rated.component';

@NgModule({
  imports: [
    SharedModule,
    MovieWallTopRatedRoutingModule
  ],
  declarations: [
    MovieWallTopRatedComponent
  ],
  providers: [
    TopRatedResolverService
  ]
})
export class MovieWallTopRatedModule { }
