import {Injectable}  from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable}  from "rxjs/Rx";
import {environment} from "../../../environments/environment";

@Injectable()
export class InterceptedHttpService extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
      super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      return super.request(url, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
      url = this.updateUrl(url);
      return super.get(url, options);
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      url = this.updateUrl(url);
      return super.post(url, body, options);
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      url = this.updateUrl(url);
      return super.put(url, body, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
      url = this.updateUrl(url);
      return super.delete(url, options);
  }

  // Update url
  private updateUrl(req: string) {

    // Add api key to url for Movie DB
    // if(req.indexOf(environment.api.baseUrl) !== -1)
    //   return req + "&api_key=" + environment.api.apiKey + "&language=" + environment.api.language;

    return req;
  }

}
