import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSortDesc'
})
export class DateSortDescPipe implements PipeTransform {

  transform(data:any): any {
    if (!data) return;
    return data.sort((a: any, b: any) => {
      if (a && a.lastUpdated && b && b.lastUpdated) {
        if (a.lastUpdated > b.lastUpdated) return 1;
        if (a.lastUpdated < b.lastUpdated) return -1;
        }
      return 0;
    });
  }
}
