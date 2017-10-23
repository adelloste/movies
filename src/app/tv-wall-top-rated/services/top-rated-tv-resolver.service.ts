import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TopRatedTvService } from '../../core/services/top-rated-tv.service';

import { TopRatedTvs } from '../../core/models/top-rated-tvs';

@Injectable()
export class TopRatedTvResolverService {

  constructor(private topRatedTvService: TopRatedTvService, private router: Router) { }
  
  // Return top rated tvs with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TopRatedTvs>  {
    return this.topRatedTvService.getTopRatedTV(1)
  }
}
