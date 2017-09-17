import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AiringTodayTvService } from './airing-today-tv.service';
import { AiringTodayTvs }       from '../models/airing-today-tvs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AiringTodayTvResolverService {

  constructor(private airingTodayTvService: AiringTodayTvService, private router: Router) { }
  
  // Return airing today tvs with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AiringTodayTvs>  {
    return this.airingTodayTvService.getAiringTodayTV(1)
  }

}
