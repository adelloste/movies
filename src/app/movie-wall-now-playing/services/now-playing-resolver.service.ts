import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NowPlayingMoviesService } from '../../core/services/now-playing-movies.service'

import { NowPlayingMovies } from '../../core/models/now-playing-movies';

@Injectable()
export class NowPlayingResolverService {

  constructor(private nowPlayingMoviesService: NowPlayingMoviesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NowPlayingMovies>  {
    return this.nowPlayingMoviesService.getNowPlayingMovies(1);
  }

}
