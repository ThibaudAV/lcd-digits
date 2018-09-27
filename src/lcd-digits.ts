import { unzip } from 'lodash';

type Digit = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
type DigitsStringProps = Record<Digit, string[]>;

export class LcdDigits {
  private readonly digitsStringProps: DigitsStringProps = {
    0: ['._.', '|.|', '|_|'],
    1: ['...', '..|', '..|'],
    2: ['._.', '._|', '|_.'],
    3: ['._.', '._|', '._|'],
    4: ['...', '|_|', '..|'],
    5: ['._.', '|_.', '._|'],
    6: ['._.', '|_.', '|_|'],
    7: ['._.', '..|', '..|'],
    8: ['._.', '|_|', '|_|'],
    9: ['._.', '|_|', '..|'],
  };

  public display(strNumber: string): string {
    const digits = this.convertStrNumberToDigits(strNumber || '');
    return this.printDigits(digits);
  }

  private convertStrNumberToDigits(strNumber: string): string[][] {
    return strNumber
      .toString()
      .split('')
      .filter((n): n is Digit => this.digitsStringProps.hasOwnProperty(n))
      .map(n => {
        return this.digitsStringProps[n];
      });
  }

  private printDigits(digits: string[][]): string {
    return unzip(digits)
      .map(ligne => ligne.join(' '))
      .join('\n');
  }
}
