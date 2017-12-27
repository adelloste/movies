import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NowPlayingMoviesService } from '../../core/services/now-playing-movies.service';

// import { PopularTvs } from '../../core/models/popular-tvs';

@Injectable()
export class NowPlayingResolverService {

  constructor(private nowPlayingMoviesService: NowPlayingMoviesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {
    return this.nowPlayingMoviesService.getNowPlayingMovies(1);
  }
  
}
