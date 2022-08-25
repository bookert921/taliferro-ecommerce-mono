import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByCustomerLastName'
})
export class SortByCustomerLastNamePipe implements PipeTransform {

  transform(data: any): any {
    if (!data) return;
    return data.sort((a: any, b: any) => {
      if (a && a.lastName && b && b.lastName) {
        if (a.lastName.trim() > b.lastName.trim()) return 1;
        if (a.lastName.trim() < b.lastName.trim()) return -1;
      }
      return 0;
    });
  }

}
