import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TvSimilarService } from './tv-similar.service';
import { TvSimilar }        from '../models/tv-similar';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TvSimilarResolverService {

  constructor(private tvSimilarService: TvSimilarService, private router: Router) { }
  
  // Return tv-credits with resolve
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TvSimilar> {
    return this.tvSimilarService.getSimilarTv(route.params['id']);
  }

}
