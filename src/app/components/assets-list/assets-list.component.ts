// Core modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// App Services
import { AssetsListService } from '../../services/assets-list.service';
// App interfaces
import { Asset } from '../../interfaces/asset.interface';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit {
  // assets list
  assetsList:Array<Asset> = [];
  // selected filters
  selectedFilters:Array<string> = [];

  constructor(
    private _assetsListService:AssetsListService,
    private _router:Router
  ) {}

  // gets a list of assets from a API service
  getAssets() {
    this._assetsListService.getAssetsList()
    .subscribe(data => this.assetsList = data);
  }
  // TODO: remove when finish
  getAssetsFake() {
    this.assetsList = this._assetsListService.getAssetsListFake();
  }
  ngOnInit() {
    // at first load
    // this.getAssets();
    // TODO: remove when finish
    this.getAssetsFake();
  }
  // applies filters to the assets list
  onChangeFilter(event: any) {
    if(event) {
      if(event.target.checked) {
        // save filter criteria as an active filter
        this.selectedFilters.push(event.target.value);
      } else {
        // remove filter criteria as an active filter
        let index = this.selectedFilters.indexOf(event.target.value, 0);
        if (index > -1) {
           this.selectedFilters.splice(index, 1);
        }
      }
    }
  }

  assetSheet(assetId:number) {
    console.log('assetId: ', assetId);
    // this._router.navigate(['/asset', assetId]);
  }

}
