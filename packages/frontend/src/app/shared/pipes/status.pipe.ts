import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: string): any {
    if (status == "0")
      return "Pending"
    else if (status == "1")
      return "On Hold"
    else if (status == "2")
      return "Approved"
    else if (status == "7")
      return "Modified"
    else if (status == "9")
      return "Fully Rejected"
    else if (status == "10")
      return "Canceled"
    else if (status == "11")
      return "Testing in Progress"
    else if (status == "14")
      return "Waiting for Review"
    else if (status == "15")
      return "All Tests Uploaded"
    else if (status == "20")
      return "Testing Complete"
    else if (status == "21")
      return "Printed"
    else if (status == "22")
      return "Reports Sent"
    else if (status == "16")
      return "Retest"
    else if (status == "50")
      return "Verified"
    else if (status == "68")
      return "Hold"
    else if (status == "5")
      return "Lab Received"
    else if (status == "72")
      return "Under Review by Doctor"
    else if (status == "76")
      return "Approved by Doctor"
    else if (status == "85")
      return "Lab Order Recieved"
    else if (status == "86")
      return "Uploaded"
    else if (status == "996")
      return "QNS"
    else if (status == "997")
      return "Partial Upload"
    else if (status == "998")
      return "Activated"
    else if (status == "999")
      return "Results Delivered"
    else if (status == "900")
      return "Unknown"
    return status;
  }

}
