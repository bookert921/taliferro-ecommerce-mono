import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentence'
})
export class SentencePipe implements PipeTransform {

  transform(value: string): any {
    if (value && value.length) {
      let lowerCase = value.toLowerCase();
      return lowerCase;
    } else {
      return value;
    }
  }

}
