import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pracSort'
})
export class PracSortPipe implements PipeTransform {

  transform(data:any): any {
    if (!data) return;
    return data.sort((a: any, b: any) => {
      if (a && a.practitionerName && b && b.practitionerName) {
        if (a.practitionerName.trim() > b.practitionerName.trim()) return 1;
        if (a.practitionerName.trim() < b.practitionerName.trim()) return -1;
        }
      return 0;
    });
  }

}
