import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteSearch'
})
export class NoteSearchPipe implements PipeTransform {

  transform(value: any, filterName: string): any {
    if (!value) return;
    if (value.length === 0 || filterName === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      let a = (item && item.text) ? item.text : '';
      let b = (item && item.updatedBy) ? item.updatedBy : '';

      if ((a.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (b.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
      ) {
        resultArray.push(item)
      }
    }


    return resultArray;

  }

}
