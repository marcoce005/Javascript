let connections = [
    'v', 'm', 'r', 't', 'p', 'q',
    'w', 'u', 'g', 'i', 'x', 'z',
    'e', 'b', 'j', 'f', 'k', 'd',
    's', 'y', 'o', 'h', 'n', 'l',
    'c', 'a'
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

export const second_convertion = (count, char) => {
    count % 26 == 0 && count != 0 ? rotate(Math.floor(count / 26)) : null;
    return connections[alphabetic_order.indexOf(char)];
};