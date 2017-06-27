import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { Credits } from '../models/credits';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieCreditsService {

  constructor(private http: Http) { }

  getCredits(index: number): Observable<Credits> {
    return this.http.get(environment.api.baseUrl + environment.api.popularCredits.uri.replace("{MOVIE_ID}", index.toString()))
                    .map((res:Response) => res.json() as Credits)  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
  }

}
