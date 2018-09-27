import { LcdDigits } from './lcd-digits';

const argc: string[] = process.argv.splice(2);

// tslint:disable-next-line:no-console
console.log(new LcdDigits().display(argc[0]));
