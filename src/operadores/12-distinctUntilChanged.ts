import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of<number | string>(
  1,
  '1',
  1,
  1,
  2,
  2,
  2,
  3,
  3,
  4,
  4,
  4,
  1,
  5,
  6,
  '1'
);

// distinct tuliza el === para comparar que el elemento
// solo aparezca una sola vez desde su llamada

// distinctUntilChange solo evalua que el valor no
// se haya llamado con su antecesor
numeros$
  .pipe(
    // distinct()
    distinctUntilChanged()
  )
  .subscribe({
    next: (valor) => console.log('next:', valor),
    complete: () => console.log('complete'),
  });

interface Personaje {
  nombre: string;
}
// cada objeto es diferente, por ello para
// verifcar que son los mismos se accede al
// nombre y se lo envia como predicado al distinct
const personajes: Personaje[] = [
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'Zero',
  },
  {
    nombre: 'Dr Willy',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Zero',
  },
];

from(personajes)
  .pipe(
    // distinct((p) => p.nombre)
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
  )
  .subscribe(console.log);
