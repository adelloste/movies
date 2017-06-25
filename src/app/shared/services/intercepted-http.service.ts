import {Injectable}  from "@angular/core";
import { ConnectionBackend, RequestOptions, URLSearchParams, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
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
      return super.get(url, this.updateOptions());
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      return super.post(url, body, options);
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      return super.put(url, body, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
      return super.delete(url, options);
  }

  // Add query params to url
  private updateOptions() {

    let params: URLSearchParams = new URLSearchParams();
    params.set('api_key', environment.api.apiKey);
    params.set('language', environment.api.language);

    let requestOptions = new RequestOptions();
    requestOptions.params = params;

    return requestOptions;
  }

}
