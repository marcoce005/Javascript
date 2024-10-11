import { convert } from "./rotor_01.js";

let out = "";

"ciro".split('').forEach((e, i) => {
    out += convert(i, e);
});

console.log(out);