import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labOrderFilter'
})
export class LabOrderFilterPipe implements PipeTransform {

  transform(value: any, filterName: string): any {
    if (!value) return;
    if (value.length === 0 || filterName === '') {
      return value;
    }
    const resultArray = [];

    for (const item of value) {
      let a = (item && item.firstName) ? item.firstName : '';
      let b = (item && item.lastName) ? item.lastName : '';
      let c = (item && item.streetAddress1) ? item.streetAddress1 : '';
      let d = (item && item.city) ? item.city : '';
      let e = (item && item.email) ? item.email : '';
      let f = (item && item.companyName) ? item.companyName : '';
      let g = (item && item.kitNumber) ? String(item.kitNumber) : '';
      let h = (item && item.status) ? item.status : '';
      let i = (item && item.orderId) ? String(item.orderId) : '';
      let j = (item && item._id) ? String(item._id) : '';
      let k = (item && item.phone) ? String(item.phone) : '';
      let l = (item && item.order && item.order.cart && item.order.cart.lineItems && item.order.cart.lineItems.length && item.order.cart.lineItems[0] && item.order.cart.lineItems[0].product && item.order.cart.lineItems[0].product.title) ? String(item.order.cart.lineItems[0].product.title) : '';
      let m = (item && item.order && item.order.cart && item.order.cart.lineItems && item.order.cart.lineItems.length && item.order.cart.lineItems[1] && item.order.cart.lineItems[1].product && item.order.cart.lineItems[1].product.title) ? String(item.order.cart.lineItems[1].product.title) : '';


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
      ) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }
}
