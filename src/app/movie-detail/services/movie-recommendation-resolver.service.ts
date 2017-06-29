import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Recommendations } from '../models/recommendations';
import { MovieRecommendationService } from './movie-recommendation.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieRecommendationResolverService implements Resolve<Recommendations> {

  constructor(private movieRecommendationService: MovieRecommendationService, private router: Router) { }

  // Return movie-recommendation with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recommendations>  {
    return this.movieRecommendationService.getRecommendation(route.params['id']) 
  }

}
