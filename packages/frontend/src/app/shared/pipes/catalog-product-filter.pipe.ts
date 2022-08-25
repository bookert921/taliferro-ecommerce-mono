import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catalogProductFilter'
})
export class CatalogProductFilterPipe implements PipeTransform {

  transform(value: any, filterName: string): any {
    if (!value) return;
    if (value.length === 0 || filterName === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      let a = (item && item.title) ? String(item.title) : '';
      let b = (item && item.keywords) ? String(item.keywords) : '';
      let c = (item && item.productType) ? String(item.productType) : '';
      let d = (item && item.manufacturer) ? String(item.manufacturer) : '';
      let e = (item && item.author) ? String(item.author) : '';
      let f = (item && item.category) ? String(item.category) : '';
      let h = (item && item.sku) ? String(item.sku) : '';

      if (
        (a.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (b.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (c.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (d.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (e.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (f.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
        || (h.toLowerCase().indexOf(filterName.toLowerCase()) > -1)
      ) {
        resultArray.push(item);
      }


    }

    return resultArray;
  }

}
