const arreglo = ['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(arreglo.join(' '));

let string = 'Hofla sfofyf mfafrfifo';

// console.log(string.split('f').join(''));

// console.log(string);

const arreglo2 = ['Banana', 'tomates', 'lechuga', 'alcaparra', 'cebolla', 'zanahoria'];

const arreglo3 = arreglo.concat(arreglo2);

// console.log(arreglo3);

// console.log(arreglo2.slice(3, 5));

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(3, 1);

// console.log(nombres);

// const index = nombres.indexOf('Pedro');
// console.log(index);

const borrarUsuario = (arreglo, usuario) => {
    const index = arreglo.indexOf(usuario);

    if (index == -1) {
        return 'No se encuentra el usuario';
    }

    arreglo.splice(index, 1);

    return arreglo;
};

// console.log(nombres);

// console.log(nombres.includes('Pedro'));

// borrarUsuario(nombres, 'Pedro');

// console.log(nombres);
// console.log(nombres.includes('Pedro'));

// nombres.reverse();

// console.log(nombres);

const obj = { a: 0, b: 1, c: 2 };

for (let i = 0; i < 10; i++) {}

for (let propiedad in obj) {
}

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

console.log('');
console.log('');
console.log('');

for (let elemento of nombres) {
    console.log(elemento);
    const index = nombres.indexOf(elemento);
}
