'use strict'


let str = ""
for (let i = 0; i <= 20; i++) {
    str = str + "x";
    document.write(str + '<br>');
}
console.log(str);


//Приветствую) есстественно нашел это решение в гугле, до этого получалось только в ряд конкатенировать "x". Посмотрев решение не понял только одно, почему нужно ставить i += 'x' ??

// for (let i = 'x'; i.length <= 20; i + 'x') {
//     console.log(i)
// }