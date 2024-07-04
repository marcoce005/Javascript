document.getElementById("submit").onclick = function () {
    const selected = document.getElementById("box").checked;             // controlla il valore della checkbox

    if (selected) {
        console.log("Hai acconsentito");
    } else {
        console.log("NON hai acconsentito");
    }
}

document.getElementById("submit2").onclick = function () {
    const first = document.getElementById("00").checked;
    const second = document.getElementById("01").checked;
    const third = document.getElementById("10").checked;
    const fourth = document.getElementById("11").checked;

    if (first) {
        console.log("ecco 0");
    } else if (second) {
        console.log("ecco 1");
    } else if (third) {
        console.log("ecco 2");
    } else if (fourth) {
        console.log("ecco 3");
    } else {
        console.log("nothing");
    }
}