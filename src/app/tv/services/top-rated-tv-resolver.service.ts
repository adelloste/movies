import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TopRatedTvService } from './top-rated-tv.service';
import { TopRatedTvs }       from '../models/top-rated-tvs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TopRatedTvResolverService {

  constructor(private topRatedTvService: TopRatedTvService, private router: Router) { }
  
  // Return top rated tvs with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TopRatedTvs>  {
    return this.topRatedTvService.getTopRatedTV()
  }

}
