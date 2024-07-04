/* 
    2 passi per creare/fare una variabile:
        - dichiararla (var, let, const)
        - assegnarla (con l'operatore = )
*/

let age;				// i let sono validi SOLO all'interno dello scope dove sono definite   -->> USARE SEMPRE QUESTE

var a = 10;		// le var non hanno uno scope (sono sempre globali ovunque vengono dichiarate)

console.log(age);       // restituirà non definito perché la variabile e vuota

age = 17;           /* oppure --> let age = 17; */
console.log(age);

let nome = "Pippo";     // stringa
console.log(nome);

let bool = true;        // variabile booleana
console.log(!bool);

age++;      // incrementa la variabile
console.log(age);

nome += 1;          // concatena alla stringa l'altro valore
console.log(nome);

console.log("Weee", nome, " T o F:\t", bool);       // per stampare piu' cose

/* per manipolare dei tag <p> in base all'ID */

document.getElementById("p1").innerHTML = "Weee " + nome;       // per concatenare si mette il '+'
document.getElementById("p2").innerHTML = "C'era una volta tanto tempo fa.....";
document.getElementById("p3").innerHTML = "Hai " + age + " anni?";
