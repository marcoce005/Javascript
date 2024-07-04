// break serve a stoppare un loop

// continue serve a saltare un determinato passaggio di un loop

for (let i = 0; i < 20; i++) {          // così termina al numero 12
    if (i == 13)
        break;

    console.log(i);
}

console.log("\nPT2\n");

for (let i = 0; i < 20; i++) {          // così arriva fina a 19 saltando il 13
    if (i == 13)
        continue;

    console.log(i);
}