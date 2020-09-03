import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('Siguiente: ', value),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Completado'),
};

const intereval$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalID);
    console.log('Intervalo limpiado');
  };
});

/*
1. Casteo multiple
2. Tambien es un observer
3. Next, error, complete

Subject permite que todas las subscriptions 
tengan la misma informacion.
*/
const subject$ = new Subject();
const subscription = intereval$.subscribe(subject$);

// const subs1 = intereval$.subscribe((rnd) => console.log('sub1', rnd));
// const subs2 = intereval$.subscribe((rnd) => console.log('sub2', rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
