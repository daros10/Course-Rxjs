import { range, asyncScheduler } from 'rxjs';
/*
range emite respeticiones en base 
a un inicio y fin
Al igual que of, trabaja de forma 
SINCRONA, sin emabrgo es posible 
convertirlos a ASINCRONOS con asyncScheduler
*/

console.log('Inicio');
// const src$ = range(1, 20);
const src$ = range(1, 5, asyncScheduler);

src$.subscribe(console.log);
console.log('Fin');
