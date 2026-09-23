import { asciiPrint } from '../src';

const print = await asciiPrint(
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png?20230715030042',
  { output: 'console', width: 48 },
);

console.log(await print.getImage());