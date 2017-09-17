import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { TopRatedTvs } from '../models/top-rated-tvs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TopRatedTvService {

  constructor(private http: Http) { }
  
  getTopRatedTV(index:number): Observable<TopRatedTvs> {
    return this.http.get(environment.api.baseUrl + environment.api.topRatedTV.uri + "?page=" + index)
                    .map((res:Response) => res.json() as TopRatedTvs)  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
  }

}
