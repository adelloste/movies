import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TvRecommendationsService } from './tv-recommendations.service';
import { TvRecommendations }        from '../models/tv-recommendations';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TvRecommendationsResolverService {

  constructor(private tvRecommendationsService: TvRecommendationsService, private router: Router) { }
  
  // Return tv-recommendations with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TvRecommendations> {
    return this.tvRecommendationsService.getRecommendationsTv(route.params['id']);
  }

}
