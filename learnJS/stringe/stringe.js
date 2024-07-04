let nome = "Pippo Pluto";

console.log("lenght -->", nome.length);     // lunghezza della stringa

console.log("prima lettera -->", nome.charAt(0));       // seleziona la lettera alla posizione

console.log("posizone di una lettera 'u' --> ", nome.indexOf('u'));     // da la locazione di quel carattere


let parola = "    ciao       ";
console.log(parola.trim());       // rimuove gli spazi in eccesso

console.log(nome.toUpperCase());      // tutto MAIUSCOLO
console.log(nome.toLowerCase());      // tutto minuscolo


let numero = "123-456-2465";
numero = numero.replaceAll("-", "/");       // sostituisce tutti i caratteri di un tipo con un altro
console.log(numero);