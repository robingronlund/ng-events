import { Injectable } from '@angular/core';
import * as models from '../models/models'
import { Http, Response, Headers, RequestOptions, RequestMethod, ResponseType, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/core';
import { environment } from "../../environments/environment";


@Injectable()
export class ApiService {
    isLoggedIn: boolean = false;

    // private baseUrl: string = environment.baseUrl;
    private baseUrl = "http://localhost:8080"
    private loginPath = '/user';
    private logoutPath = '/logout';

    private headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    };

    private withCredentials: boolean = true;

    constructor(private http: Http, private cookieService: CookieService) { }

    authenticate(userName: string, password: string) {
        let options = this.getRequestOptions();
        options.headers.append('Authorization', 'Basic ' + btoa(userName + ':' + password))
        return this.http.get(this.baseUrl + this.loginPath, options)
            .map((response: Response) => {
                response.json()
                this.isLoggedIn = true;
            })
            .catch(this.handleError)
    }

    logout() {
        let options = this.getRequestOptions();
        return this.http.post(this.baseUrl + this.logoutPath, {}, options)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError)
            .finally(() => {
                this.removeCookie('XSRF-TOKEN');
                this.removeCookie('JSESSIONID');
                this.isLoggedIn = false;
            })
    }


    get(path: string): Observable<Response> {
        let options = this.getRequestOptions();
        return this.http.get(this.baseUrl + path, options)
            .catch(this.handleError)
    }

    post(path: string, value: Object): Observable<Response> {
        let body = JSON.stringify(value);
        let options = this.getRequestOptions();
        return this.http.post(this.baseUrl + path, body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    put(path: string, value: Object): Observable<Response> {
        let body = JSON.stringify(value);
        let options = this.getRequestOptions();
        return this.http.put(this.baseUrl + path, value, options)
            .map((response: Response) => response.json())
            .catch(this.handleError)
    }

    isAuthenticated() {
        return this.isLoggedIn == true;

    }


    private extractData(res: Response) {
        let body;

        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }

    private handleError(error) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
        if (error.status == 401) {
            errMsg = "Username or password is incorrect"
        } else if (error.status == 400) {
            errMsg = "Validation failed"
        }
        return Observable.throw(errMsg);
    }

    private removeCookie(key: string) {
        return this.cookieService.remove(key);
    }

    private getRequestOptions() {
        let headers = new Headers(this.headers)
        return new RequestOptions({ headers: headers, withCredentials: this.withCredentials })
    }

}