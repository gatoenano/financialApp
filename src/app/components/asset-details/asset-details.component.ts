// Core modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// App Services
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html'
})
export class AssetDetailsComponent {

  asset:Object;
  assetsList:Array<Object>;
  reloadingData:boolean = false;

  constructor(
    private _router:Router,
    private _activatedRoute:ActivatedRoute,
    private _assetsService:AssetsService
  ) {
    this._activatedRoute.params.subscribe( params => {
      // get the asset details
      this._assetsService.getAssetDetails(params['id'])
      .subscribe( data => {
        this.asset = data;
        this.reloadingData = false;
      });
    });

    // get the assets list
    this.getCachedAssetsList();
  }
  // sets the chached assets list
  getCachedAssetsList() {
    if(localStorage.getItem('cachedAssetsList')) {
        this.assetsList = JSON.parse(localStorage.getItem('cachedAssetsList'));
    }
  }
}
