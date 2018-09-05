import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precision'
})
export class PrecisionPipe implements PipeTransform {

  transform(value: number | string, args?: any): any {
    return Number(value).toPrecision(3);
  }

}
