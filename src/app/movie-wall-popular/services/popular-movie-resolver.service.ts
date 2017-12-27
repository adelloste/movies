import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PopularMoviesService } from '../../core/services/popular-movies.service';

import { PopularMovies } from '../../core/models/popular-movies';

@Injectable()
export class PopularMovieResolverService {

  constructor(private popularMoviesService: PopularMoviesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PopularMovies>  {
    return this.popularMoviesService.getPopularMovies(1);
  }

}
