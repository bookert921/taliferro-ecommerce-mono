import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSort'
})
export class NameSortPipe implements PipeTransform {

  transform(data:any): any {
    if (!data) return;
    return data.sort((a: any, b: any) => {
      if (a && a.name && b && b.name) {
        if (a.name.trim() > b.name.trim()) return 1;
        if (a.name.trim() < b.name.trim()) return -1;
        }
      return 0;
    });
  }

}
