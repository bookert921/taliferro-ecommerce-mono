import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labProgress'
})
export class LabProgressPipe implements PipeTransform {

  transform(status: string): any {
    if (status == "0")
      return 0;             // NEW
    else if (status == "998")
      return 0;            // Activated
    else if (status == "1")
      return 1;             // ENTRY HOLD
    else if (status == "9")
      return 0;             // FULLY REJECTED
    else if (status == "10")
      return 0;             // CANCELED
    else if (status == "7")
      return 5;             // Modified
    else if (status == "5")
      return 5;             // LAB RECEIVED
    else if (status == "85")
      return 5;             // NOTCH LAB ORDER RECEIVED
    else if (status == "50")
      return 20;            // VERIFIED
    else if (status == "72")
      return 30;            // SUBMITTED TO ORDRS
    else if (status == "76")
      return 35;            // APPROVED BY ORDRS
    else if (status == "11")
      return 50;            // TESTING IN PROGRESS
    else if (status == "16")
      return 55;            // RETEST
    else if (status == "20")
      return 75;            // TESTING COMPLETED
    else if (status == "68")
      return 77;             // HOLD
    else if (status == "14")
      return 80;            // WAITING FOR REVIEW
    else if (status == "2")
      return 85;            // APPROVED
    else if (status == "86")
      return 91;            // NOTCH LAB ORDER REPORT UPLOADED
    else if (status == "15")
      return 92;            // ALL TESTS UPLOADED
    else if (status == "22")
      return 100;            // ALL REPORTS SENT
    else if (status == "996")
      return 0;              // QNS
    else if (status == "997")
      return 97;            // Partial Delivery
    else if (status == "999")
      return 100;            // Results Delivered
    else if (status == "900")
      return 98;             // Unknown
    return 0;
  }

}
