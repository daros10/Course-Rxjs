const boton = document.createElement('button');
import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

// takeUntil recibe como prametro un observable
// es alli que depenediendo del observable que recibe
// deja de ejecutar el primer observable. En este
// caso se detiene el observable counter$

// skip no ejecuta el observable hasta que se cumpla
// el valor que se le envia.

boton.innerHTML = 'Detener Timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const click$ = fromEvent(boton, 'click');
const click$ = fromEvent(boton, 'click').pipe(
  tap(() => console.log('tap antes del skip')),
  skip(1),
  tap(() => console.log('tap despues del skip'))
);

counter$.pipe(takeUntil(click$)).subscribe({
  next: (valor) => console.log('next:', valor),
  complete: () => console.log('complete'),
});
