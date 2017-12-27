import { Injectable }             from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable }             from 'rxjs/Observable';

import { TopRatedTvs } from '../models/top-rated-tvs';

import { environment } from '../../../environments/environment';

@Injectable()
export class TopRatedTvService {

  constructor(private http: HttpClient) { }
  
  getTopRatedTV(index:number): Observable<TopRatedTvs> {
    return this.http.get<TopRatedTvs>(environment.api.baseUrl + environment.api.topRatedTV.uri, { params: new HttpParams().set('page', index.toString()) });
  }

}
