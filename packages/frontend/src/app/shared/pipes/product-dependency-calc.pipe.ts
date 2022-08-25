import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productDependencyCalc'
})
export class ProductDependencyCalcPipe implements PipeTransform {

  transform(data: any, dependencyCodes: any, allProducts: any): any {
    if (!data) return;

    let codeSplit = dependencyCodes.split(",")

    for (const item of allProducts) {
      if (item.dependency && item.dependency.priceDependent) {
        item.calculatedPrice = null;
        if (codeSplit.length > 0) {
          for (let index = 0; index < codeSplit.length; index++) {
            const element = codeSplit[index];
            if (item.dependency.dependencyCode == element)
              item.calculatedPrice = item.dependency.price;
          }
        } else {
        }
      }
    }

    return data;
  }

}
