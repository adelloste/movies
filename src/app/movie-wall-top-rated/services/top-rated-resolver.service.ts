import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TopRatedMoviesService } from '../../core/services/top-rated-movies.service';

import { TopRatedMovies } from '../../core/models/top-rated-movies';

@Injectable()
export class TopRatedResolverService {

  constructor(private topRatedMoviesService: TopRatedMoviesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TopRatedMovies>  {
    return this.topRatedMoviesService.getTopratedMovies(1);
  }

}
