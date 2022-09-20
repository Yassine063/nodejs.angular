import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'militaire'
})
export class MilitairePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // const heure = value;
    
    if(typeof value !== 'string'){
      return value;
    }
    const time = value;

    var hours = Number(time)/100;

    var timeValue;

    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours == 0) {
      timeValue = "12";
    }

    timeValue += ":00"

    timeValue += (hours >= 12) ? " P.M." : " A.M.";
    return timeValue;
    }
  }


