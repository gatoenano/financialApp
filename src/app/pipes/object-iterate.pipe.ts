// Core modules
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectIterate'
})
export class ObjectIteratePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let keys = [];
    for (let key in value) {
      if(key !== null && key === 'name'){
        // first level
        keys.push(value[key]);
      } else if(value[key] !== null && typeof value[key] === 'object') {
        let deepValue = value[key];
        for (let deepKey in deepValue) {
          // second level
          if(deepKey !== null && deepKey === 'name'){
            keys.push(deepValue[deepKey]);
          } else if(deepValue[deepKey] !== null && typeof deepValue[deepKey] === 'object') {
            // third level
            if(deepValue[deepKey].name !== null){
              keys.push(deepValue[deepKey].name);
            }
          }
        }
      }
    }
    return keys;
  }
}
