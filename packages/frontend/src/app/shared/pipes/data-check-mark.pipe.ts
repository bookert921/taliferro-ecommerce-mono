import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataCheckMark'
})
export class DataCheckMarkPipe implements PipeTransform {

  transform(value: boolean): any {
    return (value) ? '' : '';
  }

}
