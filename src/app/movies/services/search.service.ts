import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Movies }         from '../models/movies';
import { environment }    from '../../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  searchMovie(query: string): Observable<Movies> {
    return this.http.get(environment.api.baseUrl + environment.api.searchMovie.uri + "?query=" + query)
                    .map((res:Response) => res.json() as Movies)  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().errors || 'Server error'));  // Process the error response object
  }

}
