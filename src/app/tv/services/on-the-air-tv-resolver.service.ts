import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { OnTheAirTvService } from '../../core/services/on-the-air-tv.service';

import { OnTheAirTvs } from '../../core/models/on-the-air-tvs';

@Injectable()
export class OnTheAirTvResolverService {

  constructor(private onTheAirTvService: OnTheAirTvService, private router: Router) { }
  
  // Return airing today tvs with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OnTheAirTvs>  {
    return this.onTheAirTvService.getOnTheAirTV(1)
  }
}
