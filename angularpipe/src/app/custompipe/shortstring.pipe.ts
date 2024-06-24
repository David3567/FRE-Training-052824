import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortstring',
  pure: false
})
export class ShortstringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value.length>=7){
      return value.substring(0,7)+"..."
    }
    return value;
  }

}
