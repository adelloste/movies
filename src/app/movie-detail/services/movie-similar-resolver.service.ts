import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MovieSimilarService } from './movie-similar.service';

import { Similars } from '../models/similars';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieSimilarResolverService {

  constructor(private movieSimilarService: MovieSimilarService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Similars> {
    return this.movieSimilarService.getSimilarMovie(route.params['id']);
  }

}
