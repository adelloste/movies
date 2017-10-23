import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { TvRecommendations } from '../models/tv-recommendations';

import { environment } from '../../../environments/environment';

@Injectable()
export class TvRecommendationsService {

  constructor(private http: HttpClient) { }
  
  getRecommendationsTv(index:number): Observable<TvRecommendations> {
    return this.http.get<TvRecommendations>(environment.api.baseUrl + environment.api.recommendationsTV.uri.replace("{TV_ID}", index.toString()));
  }
}
