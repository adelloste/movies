import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { TvDetails } from '../models/tv-details';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TvDetailService {

  constructor(private http: Http) { }
  
    getTv(index: number): Observable<TvDetails> {
      return this.http.get(environment.api.baseUrl + environment.api.detailTV.uri.replace("{TV_ID}", index.toString()))
                      .map((res:Response) => res.json() as TvDetails)  // Process the success response object
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
    }

}
