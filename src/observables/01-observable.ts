import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('Siguiente [next]: ', value),
  error: (error) => console.warn('Error [obs]: ', error),
  complete: () => console.info('Completado [obs]'),
};

// const obs$ = Observable.create();

// Siempre es recomendable establecer el tipo de infromacion que
// manejara el observale
const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Mundo');

  // Forzar un error
  // const a = undefined;
  // a.nombre = 'Dario';

  subs.complete();
  // luego de esta llamada al metodo complete
  // se deja de compartir las emisiones al
  // subscribe
  subs.next(
    'Fui llamado luego del complete, por ende no me podre mostrar en el suscribe :('
  );
});

obs$.subscribe(observer);

// obs$.subscribe(
//   (valor) => console.log('Next: ', valor),
//   (error) => console.warn('Error: ', error),
//   () => console.info('Completado')
// );
