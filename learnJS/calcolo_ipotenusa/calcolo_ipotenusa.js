/* 
    let b = Number(window.prompt("inserire la base"));
    let h = Number(window.prompt("inserire l'altezza"));

    let i = Math.sqrt(Math.pow(b, 2) + Math.pow(h, 2));
    console.log("Ipotenusa:\t", i);
 */

document.getElementById("calcola").onclick = function() {
    let b = Number(document.getElementById("b").value);
    let h = Number(document.getElementById("h").value);

    let i = Math.sqrt(Math.pow(b, 2) + Math.pow(h, 2));

    document.getElementById("risultato").innerHTML = "Ipotenusa:\t" + i;
}