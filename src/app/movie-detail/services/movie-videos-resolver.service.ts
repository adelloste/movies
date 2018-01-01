import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MovieVideosService } from './movie-videos.service';

import { Videos } from '../models/videos';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieVideosResolverService {

  constructor(private movieVideosService: MovieVideosService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Videos> {
    return this.movieVideosService.movieVideosService(route.params['id']);
  }

}
