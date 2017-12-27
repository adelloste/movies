import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UpcomingMoviesService } from '../../core/services/upcoming-movies.service';

// import { PopularTvs } from '../../core/models/popular-tvs';

@Injectable()
export class UpcomingResolverService {

  constructor(private upcomingMoviesService: UpcomingMoviesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {
    return this.upcomingMoviesService.getUpcomingMovies(1);
  }

}
