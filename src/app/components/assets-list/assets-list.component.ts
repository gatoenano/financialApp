// Core modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// App Services
import { AssetsService } from '../../services/assets.service';
// App interfaces
import { Asset } from '../../interfaces/asset.interface';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html'
})
export class AssetsListComponent implements OnInit {
  // assets list
  assetsList:Array<Asset> = [];
  // selected filters
  selectedFilters:Array<string> = [];

  constructor(
    private _assetsService:AssetsService,
    private _router:Router
  ) {}

  ngOnInit() {
    // at first load
    this.getAssets();
  }
  // gets a list of assets from a API service
  getAssets() {
    this._assetsService.getAssetsList()
    .subscribe(data => this.assetsList = data);
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
  // loads the requested asset details
  assetSheet(assetId:number) {
    this._router.navigate(['/asset', assetId]);
  }

}
