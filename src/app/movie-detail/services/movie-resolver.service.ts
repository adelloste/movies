import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MovieService } from './movie.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieResolverService implements Resolve<any> {

  constructor(private movieService: MovieService, private router: Router) { }

  // Return movie-detail with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.movieService.getMovie(route.params['id']);
  }

}

