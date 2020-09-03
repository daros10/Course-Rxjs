import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // no emite el valor que rompre la conidcion
    // takeWhile(({ y }) => y <= 150),
    // emite el valor que rompre la conidcion
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (valor) => console.log('next:', valor),
    complete: () => console.log('complete'),
  });
