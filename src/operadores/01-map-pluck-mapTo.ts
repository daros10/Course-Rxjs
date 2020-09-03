import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// const obs$ = range(1, 5);
// obs$.pipe(map<number, number>((values) => values * 10)).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyUpCode$ = keyup$.pipe(map((event) => event.code));
// const keyUpPluck$ = keyup$.pipe(pluck('key'));

// accediendo a objetos lieterales anidados
// se escribe las llavaes del objeto separados
// por coma
const keyUpPluck$ = keyup$.pipe(pluck('target', 'baseURI'));

const keyUpMapTo$ = keyup$.pipe(mapTo('tecla presionada'));

keyUpCode$.subscribe((code) => console.log('map', code));
keyUpPluck$.subscribe((code) => console.log('pluck', code));
keyUpMapTo$.subscribe((code) => console.log('mapTo', code));
