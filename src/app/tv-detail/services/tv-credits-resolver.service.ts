import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TvCreditsService } from './tv-credits.service';
import { TvCredits }        from '../models/tv-credits';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TvCreditsResolverService {

  constructor(private tvCreditsService: TvCreditsService, private router: Router) { }
  
  // Return tv-credits with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TvCredits> {
    return this.tvCreditsService.getCreditsTv(route.params['id']);
  }

}
