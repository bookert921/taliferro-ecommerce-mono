import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPosition'
})
export class SortPositionPipe implements PipeTransform {

  transform(data:any): any {
    if (!data) return;
    return data.sort((a: any, b: any) => {
      if (a && a.sortPosition && b && b.sortPosition) {
        if (a.sortPosition > b.sortPosition) return 1;
        if (a.sortPosition < b.sortPosition) return -1;
        }
      return 0;
    });
  }

}
