import { from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

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
  {
    nombre: 'Zero',
  },
];
// distinctUntilKeyChanged permite evaluar objetos
// con ellos solo se le envia la key de la cual se quiere
// estar pendiente
from(personajes)
  .pipe(
    // distinct((p) => p.nombre)
    //distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
    distinctUntilKeyChanged('nombre')
  )
  .subscribe(console.log);
