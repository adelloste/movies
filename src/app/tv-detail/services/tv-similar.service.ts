import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { TvSimilar } from '../models/tv-similar';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TvSimilarService {

  constructor(private http: Http) { }
  
    getSimilarTv(index: number): Observable<TvSimilar> {
      return this.http.get(environment.api.baseUrl + environment.api.similarTV.uri.replace("{TV_ID}", index.toString()))
                      .map((res:Response) => res.json() as TvSimilar)  // Process the success response object
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
    }

}
