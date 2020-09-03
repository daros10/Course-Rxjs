import { of } from 'rxjs';

// la funcion of por defecto tiene la naturelaza
// de trabajar de forma SINCRONA

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 2, 3, 4 );
const obs$ = of([1, 2], { a: 1, b: 2 }, () => {}, true, Promise.resolve(true));

console.log('Inicio del obs$');
obs$.subscribe(
  (next) => console.log('next:', next),
  null,
  () => console.log('Terminamos la secuencia! :)')
);
console.log('Fin del obs$');
