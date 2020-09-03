const numbers = [1, 2, 3, 4, 5];
import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

const totalReducer = (acmulador: number, valorActual: number) => {
  return acmulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0);
console.log('Total arr', total);

interval(1000)
  .pipe(take(6), tap(console.log), reduce(totalReducer, 0))
  .subscribe({
    next: (valor) => console.log('next', valor),
    complete: () => console.log('completado'),
  });
