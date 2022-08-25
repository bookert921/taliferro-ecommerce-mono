import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

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
      let e = (item && item.customerId) ? String(item.customerId) : '';
      let f = (item && item.displayName) ? String(item.displayName) : '';
      let g = (item && item.phoneNumber) ? String(item.phoneNumber) : '';
      let h = (item && item.streetAddress1) ? String(item.streetAddress1) : '';
      let i = (item && item.city) ? String(item.city) : '';
      let j = (item && item.province) ? String(item.province) : '';
      let k = (item && item.zip) ? String(item.zip) : '';
      let l = (item && item.country) ? String(item.country) : '';
      let m = (item && item.dob) ? String(item.dob) : '';
      let n = (item && item.userType) ? String(item.userType) : '';
      let o = (item && item.ccNameOnCard) ? String(item.ccNameOnCard) : '';
      let p = (item && item.updatedBy) ? String(item.updatedBy) : '';


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
        || (k.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (l.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (m.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (n.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (o.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (p.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
      ) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
