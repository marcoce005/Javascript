// fare node generate-psw.js nome cognome

function add_element(x = []) {
    for (i = 1; i < 5; i++) {
        x.push(i);
    }

    x.push('!');
    x.push('*');
    x.push('$');
    x.push('&');
    x.push(info[0].charAt(0).toUpperCase() + info[0].slice(1));
    x.push(info[1].charAt(0).toUpperCase() + info[1].slice(1));
    return x;
}

// Node.js program to demonstrate the
// process.argv Property
// Include process module
const process = require('process');
// Printing process.argv property value
var args = process.argv;

let info = [], cont = 0;
args.forEach((val, index) => {
    if (cont == 2) { info.push(`${val}`); }
    else if (cont == 3) { info.push(`${val}`); }
    cont++;
});

console.log("\nName:\t", info[0], "\nSurname:\t", info[1]);

info = add_element(info);

console.log(info);

var combi = [];
var temp = "";
var letLen = Math.pow(2, info.length);
for (var i = 0; i < letLen; i++) {
    temp = "";
    for (var j = 0; j < info.length; j++) {
        if ((i & Math.pow(2, j))) {
            temp += info[j]
        }
    }
    if (temp !== "" && temp.length >= 8) {
        combi.push(temp);
    }
}

console.log(combi);
const fs = require("fs");
fs.writeFile("./output.txt", "", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 

for (let i of combi) {
    fs.appendFile("./output.txt", i + "\n", (err) => {
        if (err) {console.log("error")};
    });
}