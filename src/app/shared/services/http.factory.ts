import { XHRBackend, Http, RequestOptions } from "@angular/http";
import { InterceptedHttpService }           from "./intercepted-http.service";


export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new InterceptedHttpService(xhrBackend, requestOptions);
}