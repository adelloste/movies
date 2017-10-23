import { Injectable }             from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable }             from 'rxjs/Observable';

import { OnTheAirTvs } from '../models/on-the-air-tvs';

import { environment } from '../../../environments/environment';

@Injectable()
export class OnTheAirTvService {

  constructor(private http: HttpClient) { }
  
  getOnTheAirTV(index:number): Observable<OnTheAirTvs> {
    return this.http.get<OnTheAirTvs>(environment.api.baseUrl + environment.api.onTheAirTV.uri, { params: new HttpParams().set('page', index.toString()) });
  }

}
