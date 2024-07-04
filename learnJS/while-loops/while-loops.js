let name = "";

while (name == "" || name == null) {
    name = window.prompt("inserire il nome");
}

console.log("ciao:\t", name);