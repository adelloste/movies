import { Injectable }             from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable }             from 'rxjs/Observable';

import { Movies } from '../models/movies';

import { environment } from '../../../environments/environment';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }
  
  searchMovie(query:string): Observable<Movies> {
    return this.http.get<Movies>(environment.api.baseUrl + environment.api.searchMovie.uri, { params: new HttpParams().set('query', query) });
  }
}
