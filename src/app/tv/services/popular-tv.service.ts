import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { PopularTvs } from '../models/popular-tvs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PopularTvService {

  constructor(private http: Http) { }

  getPopularTV(): Observable<PopularTvs> {
    return this.http.get(environment.api.baseUrl + environment.api.popularTV.uri)
                    .map((res:Response) => res.json() as PopularTvs)  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
  }

}
