import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('Siguiente: ', value),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Completado'),
};

const intervalo$ = new Observable<number>((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log(count);
  }, 1000);

  setInterval(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

// Encadenando subscribers
subs1.add(subs2).add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();

  console.log('setTimeOut completado');
}, 6000);
