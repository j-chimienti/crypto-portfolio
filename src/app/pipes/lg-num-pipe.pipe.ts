import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'lgNumPipe'
})
export class LgNumPipePipe implements PipeTransform {


  transform(value: number): string {

    if (1e9 <= value) {

      return Math.floor(value / 1e9) + ' B';
    }

    return Math.floor(value / 1e6) + ' M';


  }

}
