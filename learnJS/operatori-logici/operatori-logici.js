let temperature = 15;
let temp2 = 10;

if (temperature > 0 && temperature < 20) {          // && 'and' se questo e quello 
    console.log("temperatura mite");                // entrambi le condizioni devono essere vere
} else if (temperature > 20) {
    console.log("fa caldo");
} else {
    console.log("fa freddo");
}

if (temperature == 10 || temp2 == 10) {         // || 'or' se questo o quello
    console.log("una delle due temperature e' di 10 gradi");            // basta che una delle 2 condizioni sia vera
}

/* per negare una variabile su una '!' */

let state = false;

console.log(!state);