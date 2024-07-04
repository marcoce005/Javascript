let parola = "sushi";

switch (parola) {           // si puo usare come una catena di if
    case "sushi":                   // non solo per confrontare stringe e caratteri anche per numeri con '<=>'
        console.log("pesce");
        break;

    case "pasta":
        console.log("farina e acqua");
        break;

    case "pizza":
        console.log("pizza pasta e mandolino");
        break;

    default:
        console.log("cibo non trovato")
        break;
}