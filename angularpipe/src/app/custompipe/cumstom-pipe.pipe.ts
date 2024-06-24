import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cumstomPipe',
  pure: false,
})
export class CumstomPipePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    if (value.length > 5) {
      return value.slice(0,5) + "...";
    } else {
      return value;
    }
  }

}
