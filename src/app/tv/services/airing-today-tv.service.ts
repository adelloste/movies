import { Injectable }             from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable }             from 'rxjs/Observable';

import { AiringTodayTvs } from '../models/airing-today-tvs';

import { environment } from '../../../environments/environment';

@Injectable()
export class AiringTodayTvService {

  constructor(private http: HttpClient) { }
  
  getAiringTodayTV(index:number): Observable<AiringTodayTvs> {
    return this.http.get<AiringTodayTvs>(environment.api.baseUrl + environment.api.airingTodayTV.uri, { params: new HttpParams().set('page', index.toString()) });
  }

}
