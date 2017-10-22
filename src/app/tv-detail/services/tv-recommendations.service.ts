import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { TvRecommendations } from '../models/tv-recommendations';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TvRecommendationsService {

  constructor(private http: Http) { }
  
    getRecommendationsTv(index: number): Observable<TvRecommendations> {
      return this.http.get(environment.api.baseUrl + environment.api.recommendationsTV.uri.replace("{TV_ID}", index.toString()))
                      .map((res:Response) => res.json() as TvRecommendations)  // Process the success response object
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
    }

}
