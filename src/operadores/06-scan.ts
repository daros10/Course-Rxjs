import { from, pipe } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

//El operador scan es igual que el reduce
//la diferencia radica en que el scan
//devuelve inmediatamente el valor acumulado
//a diferencia que el reduce lo hace al final
//cuando termino de procesar todos los datos

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, curr) => acc + curr;

// reduce
from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

//scan
from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  {
    id: 'dari',
    autenticado: false,
    token: null,
  },
  {
    id: 'dari',
    autenticado: true,
    token: 'abc',
  },
  {
    id: 'dari',
    autenticado: true,
    token: 'abc123',
  },
];

const state$ = from(user);
state$.pipe(
  scan<Usuario>(
    (acc, curr) => {
      return {
        ...acc,
        ...curr,
      };
    },
    { edad: 27 }
  )
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
