import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Movie } from '../models/movie-detail';

import { environment } from '../../../environments/environment';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }
  
  getMovie(index:number): Observable<Movie> {
    return this.http.get<Movie>(environment.api.baseUrl + environment.api.popularDetail.uri.replace("{MOVIE_ID}", index.toString()))
  }

}
