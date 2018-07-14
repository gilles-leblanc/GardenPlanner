import { Pipe, PipeTransform } from '@angular/core';

import { Identity } from '../interfaces/Identity';

@Pipe({
  name: 'mod3',
})
export class Mod3Pipe implements PipeTransform {
  transform(items: Identity[], remainder: number): any {
    if (!items) {
      return items;
    }

    return items.filter(item => item.id % 3 === remainder);
  }
}
