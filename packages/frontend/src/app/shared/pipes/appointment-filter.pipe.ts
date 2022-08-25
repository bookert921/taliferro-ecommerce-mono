import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appointmentFilter'
})
export class AppointmentFilterPipe implements PipeTransform {

  transform(value: any, filterName: string): any {
    if (!value) return;
    if (value.length === 0 || filterName === '') {
      return value;
    }
    const resultArray = [];

    for (const item of value) {
      let a = (item && item.firstName) ? item.firstName : '';
      let b = (item && item.lastName) ? item.lastName : '';
      let c = (item && item.email) ? item.email : '';
      let d = (item && item.phone) ? item.phone : '';
      let e = (item && item.date) ? String(item.date) : '';
      let f = (item && item.type) ? String(item.type) : '';
      let g = (item && item.category) ? String(item.category) : '';
      let h = (item && item.calendar) ? String(item.calendar) : '';
      let i = (item && item.location) ? String(item.location) : '';
      let j = (item && item.formsText) ? String(item.formsText) : '';


      if ((a.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (b.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (c.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (d.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (e.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (f.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (g.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (h.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (i.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (j.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
      ) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
