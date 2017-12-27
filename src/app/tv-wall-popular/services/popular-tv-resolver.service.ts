import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PopularTvService } from '../../core/services/popular-tv.service';

import { PopularTvs } from '../../core/models/popular-tvs';

@Injectable()
export class PopularTvResolverService implements Resolve<PopularTvs> {

  constructor(private popularTvService: PopularTvService, private router: Router) { }

  // Return popular tvs with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PopularTvs>  {
    return this.popularTvService.getPopularTV(1)
  }

}
