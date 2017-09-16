import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppInitService {

  private _startupData: any;

  constructor(private http: Http) { }

  // Important: It should return a Promise
  public load(): Promise<any> {
    return this.http.get("")
                    .map((res:Response) => res.json() as any)
                    .toPromise()
                    .then((data: any) => {this._startupData = data;})
                    .catch((error:any) => Promise.resolve());
  }

  public startupData(): any {
    return this._startupData;
  }

  // GET parameters from url (https://stackoverflow.com/a/979997/3751473)
  public gup(name:string, url?:string): string {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    let regexS  = "[\\?&]" + name + "=([^&#]*)";
    let regex   = new RegExp(regexS);
    let results = regex.exec(url);
    return results == null ? null : results[1];
  }

}
