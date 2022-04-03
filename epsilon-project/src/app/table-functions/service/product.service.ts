import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    _url: string = "https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json"
    constructor(private http: HttpClient) { }

    getProducts(): Observable<any> {
        return this.http.get<any>(this._url)
            .pipe(
                retry(3),
                catchError(err => { throw 'something went wrong!' })
            );
    }
}