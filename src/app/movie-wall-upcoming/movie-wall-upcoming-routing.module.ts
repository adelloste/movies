import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieWallUpcomingComponent } from './movie-wall-upcoming.component';

import { UpcomingResolverService } from './services/upcoming-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: MovieWallUpcomingComponent,
        resolve: {
          upcomingMovie: UpcomingResolverService
        }
      }
    ])
  ],
  declarations: []
})
export class MovieWallUpcomingRoutingModule { }
