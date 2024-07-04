let ul = document.getElementById("lista");
let stato;

function in_green() {
    ul.classList.remove(stato);
    ul.classList.add("verde");
    stato = "verde";
}

function in_red() {
    ul.classList.remove(stato);
    ul.classList.add("rosso");
    stato = "rosso";
}

function in_blue() {
    ul.classList.remove(stato);
    ul.classList.add("blue");
    stato = "blue";
}


in_red();
in_blue();
in_green();