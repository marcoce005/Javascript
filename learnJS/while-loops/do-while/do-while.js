// fa qualcosa e poi controlla la condizione

let name;

do {
    name = window.prompt("inserire il nome");
} while(name == "")

console.log("hello:\t", name);