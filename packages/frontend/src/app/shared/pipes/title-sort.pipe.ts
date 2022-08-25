import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSort'
})
export class TitleSortPipe implements PipeTransform {

  transform(data:any): any {
    if (!data) return;
    return data.sort((a: any, b: any) => {
      if (a && a.title && b && b.title) {
        if (a.title.trim() > b.title.trim()) return 1;
        if (a.title.trim() < b.title.trim()) return -1;
        }
      return 0;
    });
  }

}
