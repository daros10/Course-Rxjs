import { of, from } from 'rxjs';

// of, toma argumentos y genera una sencuencia
// from, array, promesa, iterable, etc

const obs$ = {
  next: (val) => console.log('next', val),
  complete: () => console.log('complete'),
};

// Funcion generadora function*

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

// for (let id of miIterable) {
//   console.log(id);
// }

from(miIterable).subscribe(obs$);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('Dario');
const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(obs$);
// source$.subscribe(async (respuesta) => {
//   console.log(respuesta.body);
//   const respData = await respuesta.json();
//   console.log(respData);
// });
