import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dailyReportFilter'
})
export class DailyReportPipe implements PipeTransform {

  transform(value: any, filterName: string): any {
    if (!value) return;
    if (value.length === 0 || filterName === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      let a = (item && item.createdAt) ? String(item.createdAt) : '';
      let b = (item && item.url) ? String(item.url) : '';

      if (
        (a.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (b.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
      ) {
        resultArray.push(item);
      }


    }

    return resultArray;
  }

}
