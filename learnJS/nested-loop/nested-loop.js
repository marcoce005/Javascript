// un loop dentro l'altro

let righe = window.prompt("inserire le righe");
let colonne = window.prompt("inserire le colonne");

for (let j = 0; j < righe; j++) {
    for (let i = 0; i < colonne; i++) {
        document.getElementById("quadrilatero").innerHTML += '*\t'
    }
    document.getElementById("quadrilatero").innerHTML += "<br>"
}