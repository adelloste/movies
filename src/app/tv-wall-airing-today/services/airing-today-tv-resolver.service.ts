import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AiringTodayTvService } from '../../core/services/airing-today-tv.service';

import { AiringTodayTvs } from '../../core/models/airing-today-tvs';

@Injectable()
export class AiringTodayTvResolverService {

  constructor(private airingTodayTvService: AiringTodayTvService, private router: Router) { }
  
  // Return airing today tvs with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AiringTodayTvs>  {
    return this.airingTodayTvService.getAiringTodayTV(1)
  }

}
