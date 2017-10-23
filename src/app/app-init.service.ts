import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppInitService {

  private startupData: any;

  constructor(private http: HttpClient) { }

  // Important: It should return a Promise
  public load(): Promise<any> {
    return this.http.get("")
                    .map((res:Response) => res.json() as any)
                    .toPromise()
                    .then((data: any) => {this.startupData = data;})
                    .catch((error:any) => Promise.resolve());
  }

  public getStartupData(): any {
    return this.startupData;
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
