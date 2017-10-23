import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Credits } from '../models/credits';

import { environment } from '../../../environments/environment';

@Injectable()
export class MovieCreditsService {

  constructor(private http: HttpClient) { }
  
  getCredits(index:number): Observable<Credits> {
    return this.http.get<Credits>(environment.api.baseUrl + environment.api.popularCredits.uri.replace("{MOVIE_ID}", index.toString()))
  }

}
