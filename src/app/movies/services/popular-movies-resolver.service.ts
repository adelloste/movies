import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PopularMoviesService } from '../../core/services/popular-movies.service';

// import { PopularTvs } from '../../core/models/popular-tvs';

@Injectable()
export class PopularMoviesResolverService {

  constructor(private popularMoviesService: PopularMoviesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {
    return this.popularMoviesService.getPopularMovies(1);
  }

}
