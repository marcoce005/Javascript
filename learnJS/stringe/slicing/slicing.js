let frase = "C'era una volta tanto tempo fa...";

let parola1 = frase.slice(0, 6);    // inizio e fine
console.log(parola1);

let parola2 = frase.slice(6, frase.length);
console.log(parola2);


let nome_completo = "Pippo Pluto";

let nome = nome_completo.slice(0, nome_completo.indexOf(' '));     // prede solo la prima parola
console.log(nome);

let cognome = nome_completo.slice(nome_completo.indexOf(' ') + 1);     // prede solo la prima parola
console.log(cognome);