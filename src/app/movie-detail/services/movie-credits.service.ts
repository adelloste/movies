import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieCreditsService {

  constructor(private http: Http) { }

  getCredits(index: number): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/" + index + "/credits?api_key={API_KEY}&language=en-US")
                    .map((res:Response) => res.json())  // Process the success response object
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  // Process the error response object
  }

}