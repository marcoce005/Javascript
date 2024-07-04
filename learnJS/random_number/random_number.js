let x;

document.getElementById("random").onclick = function() {
    x = Math.floor((Math.random() * 20) + 1);                       // tra 1 e 20
    document.getElementById("risultato").innerHTML = x;
}

let dado;

document.getElementById("dado").onclick = function() {
    dado = Math.floor((Math.random() * 6) + 1);                       // tra 1 e 20
    document.getElementById("r-dado").innerHTML = dado;
}