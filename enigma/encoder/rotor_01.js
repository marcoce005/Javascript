import { second_convertion } from "./rotor_02.js";

let connections = [
    'e', 'd', 'r', 'v', 'i', 'n',
    'j', 'g', 'p', 'u', 'f', 't',
    'c', 'b', 'a', 'h', 'k', 'q',
    'o', 'x', 'w', 'y', 'm', 's',
    'l', 'z'
];

const alphabetic_order = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

const rotate = (c) => {
    connections = [...connections.slice(c), ...connections.slice(0, c)];
};

export const convert = (count, char) => {
    rotate(count);
    return second_convertion(count, connections[alphabetic_order.indexOf(char)]);
};