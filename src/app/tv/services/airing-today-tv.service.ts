import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { AiringTodayTvs } from '../models/airing-today-tvs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AiringTodayTvService {

  constructor(private http: Http) { }

  getAiringTodayTV(): Observable<AiringTodayTvs> {
    return this.http.get(environment.api.baseUrl + environment.api.airingTodayTV.uri)
                    .map((res:Response) => res.json() as AiringTodayTvs)  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
  }

}
