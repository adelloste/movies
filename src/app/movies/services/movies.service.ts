import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Movies }         from '../models/movies';
import { environment }    from '../../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

  getMovies(index: number): Observable<any> {
    return this.http.get(environment.api.baseUrl + environment.api.popular.uri + "?page=" + index)
                    .map((res:Response) => res.json())  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
  }
}
