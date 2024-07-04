function area (base, altezza) {
    return (base * altezza) / 2;
}

function add (n) {
    return n += 10;
}

let x = 0;
x = add(x);     // incrementa di 10 grazie alla funzione

console.log(x);

x = add(x);

console.log(x);

let b = 4;
let h = 3;

console.log("L'area del triangolo e':\t", area(b, h));