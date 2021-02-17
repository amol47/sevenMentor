import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usertablecolumnkey'
})
export class UsertablecolumnkeyPipe implements PipeTransform {

  transform(value: any): any {
    return Object.keys(value);
  }

}
