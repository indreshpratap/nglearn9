import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ApiResponse } from "./api.response";

@Injectable()
export class ApiClient {

    constructor(private http: HttpClient) {

    }


    fetch(url) {
        return this._fetch(this.getUrl(url));
    }

    post(url, data) {
        return this.http.post<ApiResponse>(this.getUrl(url), data);
    }


    fetchFromXyz(url) {
        return this.http.get<any>(this.getUrlForXyz(url));
    }

    private getUrl(urlSegment) {
        return environment.apiPath + urlSegment;
    }
    private getUrlForXyz(urlSegment) {
        return environment.apiXyzPath + urlSegment;
    }

    private _fetch(url) {
        return this.http.get<ApiResponse>(url);
    }
  


}