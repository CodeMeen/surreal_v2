import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wallet'
})
export class WalletPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
