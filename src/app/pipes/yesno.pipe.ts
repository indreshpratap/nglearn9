import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yesno' })
export class YesNoPipe implements PipeTransform {
    transform(value: any, cap: boolean = false) {
        if(cap) {
            return value ? 'YES':'NO';
        }else {
            return value ? 'Yes' : 'No';
  }
    }

}