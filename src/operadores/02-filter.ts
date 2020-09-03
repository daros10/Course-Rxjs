import { filter, map } from 'rxjs/operators';
import { range, from, fromEvent } from 'rxjs';

const obs$ = range(1, 10);

// obs$.pipe(filter((value) => value % 2 === 1)).subscribe(console.log);
obs$.pipe(
  filter((value, i) => {
    console.log('Index', i);
    return value % 2 === 1;
  })
);
// .subscribe(console.log);
interface Personaje {
  tipo: string;
  nombre: string;
}
const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman',
  },
  {
    tipo: 'heroe',
    nombre: 'Robin',
  },
  {
    tipo: 'villano',
    nombre: 'Joker',
  },
];

const obsPersonajes$ = from(personajes);
obsPersonajes$
  .pipe(filter((heroe) => heroe.tipo === 'heroe'))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event) => event.code),
  filter((eventCode) => eventCode === 'Enter')
);

keyup$.subscribe(console.log);
