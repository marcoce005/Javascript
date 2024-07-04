// metodo semplice con un windows promt

let username1 = window.prompt("inserire il nome:");
console.log(username1);

// metodo difficile con un textbox HTML

let username2;
document.getElementById("bottone").onclick = function() {
    username2 = document.getElementById("nome").value;      // per prendere il valore dell'input text
    console.log(username2);

    document.getElementById("label").innerHTML = "weee " + username2;     // per modificare un tag tramite l'ID
}

confirm("Vuoi fati rubare tutti i dati?");