import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appointmentTimeSort'
})
export class AppointmentTimeSortPipe implements PipeTransform {

  transform(data: any): any {
    if (!data) return;

    return data.sort((a: any, b: any) => {
      let aDate = (a.appointment) ? new Date(a.appointment.date) : new Date();
      let bDate = (b.appointment) ? new Date(b.appointment.date) : new Date();
      if (aDate > bDate) return 1;
      if (aDate < bDate) return -1;
      return 0;
    });
  }

}
