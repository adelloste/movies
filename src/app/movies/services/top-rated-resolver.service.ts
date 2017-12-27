import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TopRatedMoviesService } from '../../core/services/top-rated-movies.service';

// import { PopularTvs } from '../../core/models/popular-tvs';

@Injectable()
export class TopRatedResolverService {

  constructor(private topRatedMoviesService: TopRatedMoviesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {
    return this.topRatedMoviesService.getTopratedMovies(1);
  }

}
