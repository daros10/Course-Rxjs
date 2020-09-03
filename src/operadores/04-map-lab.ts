import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar nisi et posuere accumsan. Morbi efficitur, lectus sodales placerat interdum, leo nisi tempor neque, vel maximus lectus mauris et libero. Donec vel malesuada est. Nam sollicitudin enim diam, nec pretium neque tincidunt sit amet. Sed sodales dui quis ornare pulvinar. Etiam sit amet placerat tortor, eget maximus lectus. Duis semper tincidunt scelerisque. Curabitur eget consequat mi. Donec bibendum vehicula placerat. Donec sed rutrum elit. Cras cursus feugiat diam, id congue urna iaculis at. Etiam venenatis rutrum convallis. Mauris dui velit, semper sit amet volutpat eget, semper a nulla. Vestibulum sit amet luctus enim.
<br/>
<br/>
In viverra, neque ut vehicula elementum, nisi nisi imperdiet purus, quis tempus tellus orci at urna. Nam gravida sollicitudin magna et ultrices. Nunc at molestie mi. Praesent ullamcorper eleifend nisi, eget molestie felis laoreet a. Proin quam orci, egestas vitae elementum nec, lacinia sed elit. Nulla facilisi. Etiam a luctus purus, in consectetur turpis.
<br/>
<br/>
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis est nunc, tincidunt quis mi eu, cursus pharetra arcu. Sed nisl augue, elementum id neque eu, consequat consequat felis. Fusce sodales sit amet urna ut semper. Phasellus vitae dui lectus. Mauris id mauris vitae erat convallis scelerisque. Cras at ipsum sapien. Quisque auctor lobortis est, et lobortis leo condimentum id. Suspendisse ac blandit est, non facilisis elit.
<br/>
<br/>
Cras consequat, felis varius consequat tincidunt, tellus est vehicula metus, eget faucibus nunc est ut odio. In hac habitasse platea dictumst. Quisque scelerisque est augue, a tincidunt elit commodo quis. Ut in interdum purus, sed pulvinar augue. Nam mauris odio, condimentum quis scelerisque ac, elementum rutrum ipsum. Aliquam nulla dui, laoreet eu lacus ultricies, laoreet lobortis velit. Proin sodales, purus aliquam maximus fringilla, odio felis vehicula metus, a lacinia ante mauris vel eros. Nam congue dolor quis tellus tempor, vel varius nisl vulputate. Duis finibus gravida nulla, sit amet egestas urna euismod at. Praesent vulputate sapien augue, ut tristique lorem ultrices vitae. Morbi blandit lacus sed ex commodo, eget auctor sapien scelerisque. Vivamus dictum dui sed lectus interdum, nec pharetra est ullamcorper.
<br/>
<br/>
Etiam efficitur, lacus quis mollis vehicula, leo eros fringilla dui, ut lobortis eros neque id ante. Donec pretium placerat porttitor. Quisque purus magna, tempus et auctor in, commodo in lectus. Nullam vel vehicula nulla. Nunc elit massa, tincidunt eget vulputate et, convallis a eros. Suspendisse aliquam suscipit diam, a vulputate purus tempus non. Ut ullamcorper tristique libero viverra placerat. Nullam nibh elit, suscipit vitae dui id, posuere aliquam ex. Pellentesque iaculis suscipit elementum. Mauris sollicitudin arcu est, id aliquet dolor ultrices non. Nullam sed orci nec erat lobortis porttitor. Nullam sapien ipsum, molestie at urna et, elementum scelerisque justo.
`;
const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;
  // console.log({
  //   scrollTop,
  //   scrollHeight,
  //   clientHeight,
  // });
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  map((event) => calcularPorcentajeScroll(event)),
  tap((porcentaje) => console.log(porcentaje))
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
