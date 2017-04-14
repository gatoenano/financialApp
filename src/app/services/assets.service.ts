// Core modules
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// App interfaces
import { Asset } from '../interfaces/asset.interface';

@Injectable()
export class AssetsService {
  // assets API url
  private assetsAPIUrl:string = 'http://jsonstub.com/etsfintech/symbols'
  // assets API headers
  private assetsAPIHeaders:Object;

  constructor(
    private _http:Http
  ) {
    // set the headers for the API calls
    let headers = new Headers(
      {
        'Content-Type': 'application/json',
        'JsonStub-User-Key': '9facef2e-9583-4a83-9f08-c87159f1c113',
        'JsonStub-Project-Key': '6ed070c1-b334-4612-8fa8-169c5e45baef'
      }
    );

    this.assetsAPIHeaders = new RequestOptions({ headers: headers });
  }

  // API calls
  // @returns: a list of assets in an array of objects
  getAssetsList(): Observable<Asset[]> {
    // API call
    return this._http.get(this.assetsAPIUrl, this.assetsAPIHeaders)
      .map(res => {
        let body = res.json();
        // cache the result in localstorage
        localStorage.setItem('cachedAssetsList', JSON.stringify(body));
        // return the result
        return body || { };
      })
      .catch(this.handleAPIError);
  }
  // @returns: an asset details object
  getAssetDetails(assetId: string): Observable<Object> {
    // API call
    return this._http.get(`${this.assetsAPIUrl}/${assetId}`, this.assetsAPIHeaders)
      .map(res => {
        let body = res.json();
        return body || { };
      })
      .catch(this.handleAPIError);
  }
  //  API error handler
  private handleAPIError(error: any) {
    let errMsg: string;
    if (error) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
