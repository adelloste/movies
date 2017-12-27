import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { TvCredits } from '../models/tv-credits';

import { environment } from '../../../environments/environment';

@Injectable()
export class TvCreditsService {

  constructor(private http: HttpClient) { }
  
  getCreditsTv(index:number): Observable<TvCredits> {
    return this.http.get<TvCredits>(environment.api.baseUrl + environment.api.creditsTV.uri.replace("{TV_ID}", index.toString()));
  }

}
