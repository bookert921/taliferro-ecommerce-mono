import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartFilter'
})
export class CartFilterPipe implements PipeTransform {

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
      let f = (item && item.userType) ? String(item.userType) : '';
      let g = (item && item.lineItems && item.lineItems[0] && item.lineItems[0].product && item.lineItems[0].product.title) ? item.lineItems[0].product.title : '';
      let h = (item && item.lineItems && item.lineItems[1] && item.lineItems[1].product && item.lineItems[1].product.title) ? item.lineItems[1].product.title : '';
      let i = (item && item.lineItems && item.lineItems[2] && item.lineItems[2].product && item.lineItems[2].product.title) ? item.lineItems[2].product.title : '';
      let j = (item && item.lineItems && item.lineItems[0] && item.lineItems[0].product && item.lineItems[0].product.category) ? item.lineItems[0].product.category : '';
      let k = (item && item.lineItems && item.lineItems[1] && item.lineItems[1].product && item.lineItems[1].product.category) ? item.lineItems[1].product.category : '';
      let l = (item && item.lineItems && item.lineItems[2] && item.lineItems[2].product && item.lineItems[2].product.category) ? item.lineItems[2].product.category : '';


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
      ) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
