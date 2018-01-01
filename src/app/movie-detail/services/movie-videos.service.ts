import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Videos } from '../models/videos';

import { environment } from '../../../environments/environment';

@Injectable()
export class MovieVideosService {

  constructor(private http: HttpClient) { }
  
  movieVideosService(index:number): Observable<Videos> {
    return this.http.get<Videos>(environment.api.baseUrl + environment.api.videosMOVIE.uri.replace("{MOVIE_ID}", index.toString()));
  }

}
