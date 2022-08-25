import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  public darkBackground =  "#000000";
  public secondaryColor = "#6e757c";
  public color = "#000000";
  public backgroundColor = "#ffffff";

  constructor() { }

  public static hexToRGB(h: any) {
    let r,g,b: any;
    r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    let rbgColor =  "rgba("+ +r + "," + +g + "," + +b + ",0.09)";
    return rbgColor;
  }

  public static hexToRGBByPercent(h: any, percent:number) {
    let r,g,b: any;
    r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    let rbgColor =  "rgba("+ +r + "," + +g + "," + +b + "," + percent + ")";
    return rbgColor;
  }

}
