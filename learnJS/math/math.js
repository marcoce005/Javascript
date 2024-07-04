let pi = 3.14;
let x = 5.99;
let y = 1.1;

pi = Math.round(pi);        // arrotonda eliminando la virgola
console.log(pi, " --> round");

x = Math.floor(x);      // arrotonda per difetto
console.log(x, " --> floor");

y = Math.ceil(y);     // arrotonda per eccesso
console.log(y, " --> ceil");

let n = Math.pow(2, 3);     // elevamento x alla y (x, y)
console.log(n, " --> pow");

n = Math.sqrt(n);       // radice quadrado
console.log(n, " --> radice quadrata");

let neg = -123;
console.log(Math.abs(neg), " --> | x |");     // rende tutto positivo

console.log(Math.max(pi, x, y, neg), " --> massimo");       // massimo

console.log(Math.PI, " --> pigreco");       // pigreco