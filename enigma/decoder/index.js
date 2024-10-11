import { second_convertion } from "./rotor_02.js";

let out = "";

"jhhahutmjlgvrvohn".split('').forEach((e, i) => {
    out += second_convertion(i, e);
});

console.log(out);