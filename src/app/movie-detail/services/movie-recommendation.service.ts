import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Recommendations } from '../models/recommendations';

import { environment } from '../../../environments/environment';

@Injectable()
export class MovieRecommendationService {

  constructor(private http: HttpClient) { }
  
  getRecommendation(index:number): Observable<Recommendations> {
    return this.http.get<Recommendations>(environment.api.baseUrl + environment.api.recommendationsMOVIE.uri.replace("{MOVIE_ID}", index.toString()))
  }

}
