import { LcdDigits } from './lcd-digits';

describe('LCD Digits', () => {
  const LCDAllDigits =
    '... ._. ._. ... ._. ._. ._. ._. ._. ._.\n' +
    '..| ._| ._| |_| |_. |_. ..| |_| |_| |.|\n' +
    '..| |_. ._| ..| ._| |_| ..| |_| ..| |_|';

  let lcdDigits: LcdDigits;

  beforeEach(() => {
    lcdDigits = new LcdDigits();
  });

  it('should display all numbers in LCD format', () => {
    expect(lcdDigits.display('1234567890')).toEqual(LCDAllDigits);
  });

  it('should ignore non-numeric characters', () => {
    expect(lcdDigits.display('Test__--123\n456..7890')).toEqual(LCDAllDigits);
  });

  it('should return nothing if no number is given', () => {
    expect(lcdDigits.display('')).toEqual('');
  });
});
