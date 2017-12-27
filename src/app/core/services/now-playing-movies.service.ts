import { Injectable }             from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable }             from 'rxjs/Observable';

// import { PopularTvs } from '../models/popular-tvs';

import { environment } from '../../../environments/environment';

@Injectable()
export class NowPlayingMoviesService {

  constructor(private http: HttpClient) { }
  
  getNowPlayingMovies(index:number): Observable<any> {
    return this.http.get<any>(environment.api.baseUrl + environment.api.nowPlayingMOVIES.uri, { params: new HttpParams().set('page', index.toString()) });
  }

}
