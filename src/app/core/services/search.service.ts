import { Injectable }             from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable }             from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }
  
  search(query:string): Observable<any> {
    return this.http.get<any>(environment.api.baseUrl + environment.api.search.uri, { params: new HttpParams().set('query', query) });    
  }
}
