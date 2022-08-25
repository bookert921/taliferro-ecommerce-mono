import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {

  transform(value: any, filterName: string): any {
    if (!value) return;
    if (value.length === 0 || filterName === '') {
      return value;
    }
    const resultArray = [];

    for (const item of value) {
      let a = (item && item.cart && item.cart.firstName) ? item.cart.firstName : '';
      let b = (item && item.cart && item.cart.lastName) ? item.cart.lastName : '';
      let c = (item && item.cart && item.cart.companyName) ? item.cart.companyName : '';
      let d = (item && item.cart && item.cart.email) ? item.cart.email : '';
      let e = (item && item.cart && item.cart.lineItems && item.cart.lineItems[0] && item.cart.lineItems[0].product) ? item.cart.lineItems[0].product.title : '';
      let f = (item && item.cart && item.cart.lineItems && item.cart.lineItems[1] && item.cart.lineItems[1].product) ? item.cart.lineItems[1].product.title : '';
      let g = (item && item.cart && item.cart.lineItems && item.cart.lineItems[2] && item.cart.lineItems[2].product) ? item.cart.lineItems[2].product.title : '';
      let h = (item && item.cart && item.cart.npi) ? item.cart.npi : '';
      let i = (item && item.cart && item.cart.pracEmail) ? item.cart.pracEmail : '';
      let j = (item && item.cart && item.cart.phone) ? String(item.cart.phone) : '';
      let k = (item && item.cart && item.cart.practitionerName) ? item.cart.practitionerName : '';
      let l = (item && item.cart && item.status) ? item.status : '';
      let m = (item && item.cart && item.cart.userType) ? item.cart.userType : '';
      let n = (item && item.cart && item.cart.zip) ? String(item.cart.zip) : '';
      let o = (item && item.chargeResponse && item.chargeResponse.balance_transaction) ? item.chargeResponse.balance_transaction : '';
      let p = (item && item.chargeResponse && item.chargeResponse.description) ? item.chargeResponse.description : '';
      let q = (item && item.chargeResponse && item.chargeResponse.id) ? String(item.chargeResponse.id) : '';
      let r = (item && item.chargeResponse && item.chargeResponse.status) ? item.chargeResponse.status : '';
      let s = (item && item.chargeResponse && item.chargeResponse.payment_method) ? item.chargeResponse.payment_method : '';
      let t = (item && item.chargeResponse && item.chargeResponse.outcome && item.chargeResponse.outcome.seller_message) ? item.chargeResponse.outcome.seller_message : '';
      let u = (item && item.chargeResponse && item.chargeResponse.outcome && item.chargeResponse.outcome.type) ? String(item.chargeResponse.outcome.type) : '';
      let v = (item && item.cart && item.cart.pracFirstName) ? item.cart.pracFirstName : '';
      let w = (item && item.cart && item.cart.pracLastName) ? item.cart.pracLastName : '';

      let a1 = (item && item.user && item.user.firstName) ? item.user.firstName : '';
      let b1 = (item && item.user && item.user.middle_name) ? item.user.middle_name : '';
      let c1 = (item && item.user && item.user.lastName) ? item.user.lastName : '';
      let d1 = (item && item.user && item.user.dob) ? item.user.dob : '';
      let e1 = (item && item.user && item.user.streetAddress1) ? item.user.streetAddress1 : '';
      let f1 = (item && item.user && item.user.city) ? item.user.city : '';
      let g1 = (item && item.user && item.user.zip) ? item.user.zip : '';
      let h1 = (item && item.user && item.user.phoneNumber) ? String(item.user.phoneNumber) : '';
      let i1 = (item && item.user && item.user.email) ? item.user.email : '';
      let j1 = (item && item.user && item.user.kitNumber) ? String(item.user.kitNumber) : '';
      let k1 = (item && item.user && item.user.passportNumber) ? String(item.user.passportNumber) : '';
      let l1 = (item && item.user && item.user.insuranceName) ? item.user.insuranceName : '';
      let m1 = (item && item.user && item.user.insurancePolicyNumber) ? String(item.user.insurancePolicyNumber) : '';
      let n1 = (item && item.user && item.user.practitionerName) ? item.user.practitionerName : '';
      let o1 = (item && item.user && item.user.pracFirstName) ? item.user.pracFirstName : '';
      let p1 = (item && item.user && item.user.pracLastName) ? item.user.pracLastName : '';
      let q1 = (item && item.user && item.user.companyName) ? item.user.companyName : '';

      let a2 = (item && item.appointment && item.appointment.firstName) ? item.appointment.firstName : '';
      let b2 = (item && item.appointment && item.appointment.lastName) ? item.appointment.lastName : '';
      let c2 = (item && item.appointment && item.appointment.calendar) ? item.appointment.calendar : '';
      let d2 = (item && item.appointment && item.appointment.category) ? item.appointment.category : '';
      let e2 = (item && item.appointment && item.appointment.date) ? item.appointment.date : '';
      let f2 = (item && item.appointment && item.appointment.type) ? item.appointment.type : '';
      let g2 = (item && item.appointment && item.appointment.phone) ? String(item.appointment.phone) : '';
      let h2 = (item && item.appointment && item.appointment.email) ? item.appointment.email : '';
      let i2 = (item && item.appointment && item.appointment.id) ? String(item.appointment.id) : '';
      let j2 = (item && item.appointment && item.appointment.type) ? item.appointment.type : '';
      let k2 = (item && item._id) ? String(item._id) : '';

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
        || (q.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (r.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (s.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (t.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (u.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (v.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (w.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (a1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (b1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (c1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (d1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (e1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (f1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (g1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (h1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (i1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (j1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (k1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (l1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (m1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (n1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (o1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (p1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (q1.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (a2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (b2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (c2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (d2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (e2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (f2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (g2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (h2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (i2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (j2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (k2.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
      ) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }
}
