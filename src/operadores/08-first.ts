import { fromEvent } from 'rxjs';
import { take, first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

// trabaja como el take, pero a su vez es posible
// enviarme o ejecutar una funcion para que
// se ejecute o vivia mientras eso se cumple
click$
  .pipe(
    // take(1)
    tap<MouseEvent>(console.log),
    // map((event) => ({
    //   clientX: event.clientX,
    //   clientY: event.clientY,
    // }))
    map(({ clientX, clientY }) => ({
      clientX,
      clientY,
    })),
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (valor) => console.log('next:', valor),
    complete: () => console.log('Completed'),
  });
