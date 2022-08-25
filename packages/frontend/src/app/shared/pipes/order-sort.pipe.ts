import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderSort'
})
export class OrderSortPipe implements PipeTransform {

  transform(data: any): any {
    if (!data) return;
    return data.sort((a: any, b: any) => {
      let aDate = (a.lastUpdated) ? new Date(a.lastUpdated) : new Date();
      let bDate = (b.lastUpdated) ? new Date(b.lastUpdated) : new Date();

      if (aDate > bDate) return -1;
      if (aDate < bDate) return 1;
      return 0;
    });
  }

}
