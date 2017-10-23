import { Injectable }             from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable }             from 'rxjs/Observable';

import { PopularTvs } from '../models/popular-tvs';

import { environment } from '../../../environments/environment';

@Injectable()
export class PopularTvService {

  constructor(private http: HttpClient) { }
  
  getPopularTV(index:number): Observable<PopularTvs> {
    return this.http.get<PopularTvs>(environment.api.baseUrl + environment.api.popularTV.uri, { params: new HttpParams().set('page', index.toString()) });
  }

}
