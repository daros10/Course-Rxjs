import { fromEvent } from 'rxjs';

/*
Eventos del DOM
*/
// La funcion fromEvent trabaja en base a events
// target del DOM

// dando el tipado, se genera el intelisenses con
// con la propiedades del objeto como tal.
const src$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: (val) => console.log('next:', val),
};

src$.subscribe(({ x, y }) => {
  console.log(x, y);
});
src2$.subscribe((evento) => {
  console.log(evento.key);
});
