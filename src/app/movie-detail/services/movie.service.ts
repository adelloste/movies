import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';

import { Movie } from '../models/movie-detail';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMovie(index: number): Observable<Movie> {
    return this.http.get(environment.api.baseUrl + environment.api.popularDetail.uri.replace("{MOVIE_ID}", index.toString()))
                    .map((res:Response) => res.json() as Movie)  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
  }

}
