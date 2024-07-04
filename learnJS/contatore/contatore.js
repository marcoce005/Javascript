function print() {          // funzione che stampa nella label
    document.getElementById("contatore").innerHTML = cont;
}

let cont = 0;

document.getElementById("piu").onclick = function() {       // incrementa
    cont++;
    print();
}

document.getElementById("meno").onclick = function() {          // decrementa
    cont--;
    print();
}

document.getElementById("reset").onclick = function() {         // resetta
    cont = 0;
    print();
}

