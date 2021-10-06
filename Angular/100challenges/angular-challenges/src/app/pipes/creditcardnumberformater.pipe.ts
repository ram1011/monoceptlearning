import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccformater',
})
export class CreditcardnumberformaterPipe implements PipeTransform {
  public transform(cardnumber: string): string {
    if (!this.hascorrectLength(cardnumber)) {
      return 'Invalid length';
    }
    if (!this.hasAllNumbers(cardnumber)) {
      return 'Invalid cardnumbers';
    }
    return this.formatNumber(cardnumber);
  }
  private hascorrectLength(cardnumber: string): boolean {
    const aecardlength = 15;
    const masterlength = 16;
    if (
      cardnumber.length === masterlength ||
      cardnumber.length === aecardlength
    ) {
      return true;
    }
    return false;
  }
  private hasAllNumbers(cardnumber: string): boolean {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalvalidnumbers = cardnumber
      .split('')
      .filter((item) => numbers.includes(item));
    if (totalvalidnumbers.length === cardnumber.length) {
      return true;
    }
    return false;
  }
  private formatNumber(cardnumber: string): string {
    return cardnumber.match(/.{1,4}/g).join('-');
  }
}
