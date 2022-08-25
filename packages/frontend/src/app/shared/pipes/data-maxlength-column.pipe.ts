import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataMaxlengthColumn'
})
export class DataMaxlengthColumnPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return;
    if (value.length && (value.length > 15))
      return ('...' + value.substr(value.length - 15));
    else
      return value;
  }

}
