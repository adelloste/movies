import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TvVideosService } from './tv-videos.service';

import { Videos } from '../models/videos';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TvVideosResolverService {

  constructor(private tvVideosService: TvVideosService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Videos> {
    return this.tvVideosService.tvVideosService(route.params['id']);
  }

}
