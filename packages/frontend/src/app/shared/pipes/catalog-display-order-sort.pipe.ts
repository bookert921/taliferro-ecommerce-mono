import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catalogDisplayOrderSort'
})
export class CatalogDisplayOrderSortPipe implements PipeTransform {

  transform(data: any): any {
    if (!data) return;
    return data.sort((a: any, b: any) => {
      if (!(a && a.display_order))
        a.display_order = 999;
      if (!(b && b.display_order))
        a.display_order = 999;
      if (a && a.display_order && b && b.display_order) {
        if (a.display_order > b.display_order) return 1;
        if (a.display_order < b.display_order) return -1;
      }
      return 0;
    });
  }

}
