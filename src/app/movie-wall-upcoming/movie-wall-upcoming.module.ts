import { NgModule } from '@angular/core';

import { SharedModule }                   from '../shared/shared.module';
import { MovieWallUpcomingRoutingModule } from './movie-wall-upcoming-routing.module';

import { UpcomingResolverService } from './services/upcoming-resolver.service';

import { MovieWallUpcomingComponent } from './movie-wall-upcoming.component';

@NgModule({
  imports: [
    SharedModule,
    MovieWallUpcomingRoutingModule
  ],
  declarations: [
    MovieWallUpcomingComponent
  ],
  providers: [
    UpcomingResolverService
  ]
})
export class MovieWallUpcomingModule { }
