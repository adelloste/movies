import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { OnTheAirTvs } from '../models/on-the-air-tvs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class OnTheAirTvService {

  constructor(private http: Http) { }

  getOnTheAirTV(): Observable<OnTheAirTvs> {
    return this.http.get(environment.api.baseUrl + environment.api.onTheAirTV.uri)
                    .map((res:Response) => res.json() as OnTheAirTvs)  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
  }

}
