import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { TvCredits } from '../models/tv-credits';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TvCreditsService {

  constructor(private http: Http) { }

  getCreditsTv(index: number): Observable<TvCredits> {
    return this.http.get(environment.api.baseUrl + environment.api.creditsTV.uri.replace("{TV_ID}", index.toString()))
                    .map((res:Response) => res.json() as TvCredits)  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
  }

}
