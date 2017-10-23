import { Injectable }             from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable }             from 'rxjs/Observable';

import { Movies } from '../models/movies';

import { environment } from '../../../environments/environment';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(index:number): Observable<Movies> {
    return this.http.get<Movies>(environment.api.baseUrl + environment.api.popular.uri, { params: new HttpParams().set('page', index.toString()) });
  }
}
