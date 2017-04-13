// Core modules
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// App interfaces
import { Asset } from '../interfaces/asset.interface';

@Injectable()
export class AssetsListService {
  // assets API url
  private assetsAPIUrl:string = 'http://jsonstub.com/etsfintech/symbols'
  // assets API headers
  private assetsAPIHeaders:Object;

  // TODO: remove when finish
  private assetsFake:Array<Asset> = [
    {
      "id": 9756,
      "name": "Jpmorgan Investment Funds - Global Macro Opportunities Fund A Acc",
      "currency": "EUR",
      "risk_family": "Balanced"
    },
    {
      "id": 42736,
      "name": "Allianz Fondsvorsorge 1977-1996 A Acc",
      "currency": "EUR",
      "risk_family": "Balanced"
    },
    {
      "id": 43722,
      "name": "JB MP Konwave Gold Equity Fund B Acc",
      "currency": "USD",
      "risk_family": "Equity"
    },
    {
      "id": 47868,
      "name": "Invesco Pan European Structured Equity Fund A Acc",
      "currency": "EUR",
      "risk_family": "Equity"
    },
    {
      "id": 57400,
      "name": "Invesco Pan European High Income Fund E Acc",
      "currency": "EUR",
      "risk_family": "Balanced"
    },
    {
      "id": 62509,
      "name": "Henderson Horizon Pan European Property Equities Fund A2 Acc",
      "currency": "JPY",
      "risk_family": "Equity"
    },
    {
      "id": 65388,
      "name": "Carmignac Patrimoine A Acc",
      "currency": "EUR",
      "risk_family": "Balanced"
    },
    {
      "id": 78072,
      "name": "Global Stable Equity Fund BI Acc",
      "currency": "EUR",
      "risk_family": "Equity"
    },
    {
      "id": 78178,
      "name": "Stable Return Fund BP Acc",
      "currency": "JPY",
      "risk_family": "Balanced"
    },
    {
      "id": 90690,
      "name": "Janus Global Life Sciences Fund I (acc.) Acc",
      "currency": "USD",
      "risk_family": "Equity"
    }
  ]

  constructor(
    private _http:Http
  ) {
    console.log('AssetsListService constructor');
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

  // API call
  // @returns: a list of assets in an array of objects
  getAssetsList(): Observable<Asset[]> {
    // API call
    return this._http.get(this.assetsAPIUrl, this.assetsAPIHeaders)
      .map(this.getAPIData)
      .catch(this.handleAPIError);
  }
  // TODO: remove when finish
  getAssetsListFake(): Asset[] {
    return this.assetsFake;
  }
  // API data extraction
  private getAPIData(res: any) {
    let body = res.json();
    return body || { };
  }
  //  API error handler
  private handleAPIError(error: any) {
    console.log('handleAPIError: ', error);
    let errMsg: string;
    if (error) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
