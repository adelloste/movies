import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { Recommendations } from '../models/recommendations';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieRecommendationService {

  constructor(private http: Http) { }

  getRecommendation(index: number): Observable<Recommendations> {
    return this.http.get(environment.api.baseUrl + environment.api.popularRecommendation.uri.replace("{MOVIE_ID}", index.toString()))
                    .map((res:Response) => res.json() as Recommendations)  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
  }

}
