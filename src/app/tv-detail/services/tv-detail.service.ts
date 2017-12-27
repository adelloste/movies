import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { TvDetails } from '../models/tv-details';

import { environment } from '../../../environments/environment';

@Injectable()
export class TvDetailService {

  constructor(private http: HttpClient) { }
  
  getTv(index:number): Observable<TvDetails> {
    return this.http.get<TvDetails>(environment.api.baseUrl + environment.api.detailTV.uri.replace("{TV_ID}", index.toString()));
  }

}
