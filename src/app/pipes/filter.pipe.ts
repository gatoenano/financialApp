// Core modules
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(assets: any, filters?: any[]): any {
    return assets.filter(asset => {
      // if selected filters exists
      if(filters.length > 0) {
        // if selected filters are active
        let filterCurrencyFound = filters.indexOf(asset.currency);
        let filterRiskFamilyFound = filters.indexOf(asset.risk_family);
        // applies/removes visibility to the asset
        (filterCurrencyFound > -1 || filterRiskFamilyFound > -1)? asset.visibility = true : asset.visibility = false;

        return asset.visibility;
      }
      // return the asset by default
      return asset;
    });
  }

}
