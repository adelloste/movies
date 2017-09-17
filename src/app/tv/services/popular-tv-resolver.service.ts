import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PopularTvService } from './popular-tv.service';
import { PopularTvs }       from '../models/popular-tvs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PopularTvResolverService implements Resolve<PopularTvs> {

  constructor(private popularTvService: PopularTvService, private router: Router) { }

  // Return popular tvs with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PopularTvs>  {
    return this.popularTvService.getPopularTV(1)
  }

}
