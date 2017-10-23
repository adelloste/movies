import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { TvSimilar } from '../models/tv-similar';

import { environment } from '../../../environments/environment';

@Injectable()
export class TvSimilarService {

  constructor(private http: HttpClient) { }
  
  getSimilarTv(index:number): Observable<TvSimilar> {
    return this.http.get<TvSimilar>(environment.api.baseUrl + environment.api.similarTV.uri.replace("{TV_ID}", index.toString()));
  }

}
