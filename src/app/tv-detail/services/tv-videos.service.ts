import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Videos } from '../models/videos';

import { environment } from '../../../environments/environment';

@Injectable()
export class TvVideosService {

  constructor(private http: HttpClient) { }
  
  tvVideosService(index:number): Observable<Videos> {
    return this.http.get<Videos>(environment.api.baseUrl + environment.api.videosTV.uri.replace("{TV_ID}", index.toString()));
  }

}
