let age = window.prompt("Quanti anni hai?");        // ci restituisce una stringa

console.log(typeof age);        // 'typeof' per vedere la tipologia di variabile

age = Number(age);      // converte da stringa a numero

console.log(typeof age);

age++;
console.log(age);


/* altro esempio */

let x, y, z;

x = Number("3.14");     // da stringa a numero
y = String(7.77);       // da numero a stringa
z = Boolean("true")     // da strina a booleano
// vuoto == "" --> sara' False con una stringa sara' sempre True

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

/* se si prova a convertire in un numero qualcosa che non lo e' restituisce NaN == NotANumber */