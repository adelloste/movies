import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TvDetailService } from './tv-detail.service';
// import { Movie } from '../models/movie-detail';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TvDetailResolverService implements Resolve<any> {

  constructor(private tvDetailService: TvDetailService, private router: Router) { }
  
    // Return tv-detail with resolve
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      return this.tvDetailService.getTv(route.params['id']);
    }

}
