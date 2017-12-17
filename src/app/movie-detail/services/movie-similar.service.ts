import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Similars } from '../models/similars';

import { environment } from '../../../environments/environment';

@Injectable()
export class MovieSimilarService {

  constructor(private http: HttpClient) { }
  
  getSimilarMovie(index:number): Observable<Similars> {
    return this.http.get<Similars>(environment.api.baseUrl + environment.api.similarMOVIE.uri.replace("{TV_ID}", index.toString()));
  }

}
