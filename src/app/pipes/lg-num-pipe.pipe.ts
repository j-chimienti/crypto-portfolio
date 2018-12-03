import {Pipe, PipeTransform} from '@angular/core';
import BigNumber from 'bignumber.js';

@Pipe({
  name: 'lgNumPipe'
})
export class LgNumPipePipe implements PipeTransform {


  transform(value: number): string {

    if (1e9 <= value) {

      return new BigNumber(value).div(1e9).toPrecision(3) + ' B';
    } else if (1e6 <= value) {

      return new BigNumber(value).div(1e6).toPrecision(3) + ' M';
    }
    return value.toString();

  }

}
