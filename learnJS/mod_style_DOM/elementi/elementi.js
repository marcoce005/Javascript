// creare un tag HTML
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let h3 = document.createElement("h3");

// scrivere nel tag appena creato
h1.innerText = "Weee";          // text imposta il testo
h2.innerHTML = "<i>Ciao</i>";      // con html si posso mettere anche dei tag
h3.innerText = "Pippo";

// renderizzare i tag creati
const body = document.body;
body.append(h1);
body.append(h2);
body.append(h3);

// eliminare un tag
h3.remove();