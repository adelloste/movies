import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Credits }             from '../models/credits';
import { MovieCreditsService } from './movie-credits.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieCreditsResolverService implements Resolve<Credits> {

  constructor(private movieCreditsService: MovieCreditsService, private router: Router) { }

  // Return movie-credits with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Credits>  {
    return this.movieCreditsService.getCredits(route.params['id'])
  }

}
