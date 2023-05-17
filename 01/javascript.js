let a = "Soy un string en la varialbe 'a'";
let b = 'Soy otro string';

const numero = 8;

let f = `Su numero almacenado en la variable numero es ${numero}`;

let otroNumero = 123;

let boolean = true;

let g = null;

// console.log(g);

let x;
// console.log(x);

const fecha1 = 22 / 2 / 1995;

const fecha = new Date();
// console.log(fecha.toLocaleTimeString());

const error = new Error();
// console.log(error);

function unaFunciona(params) {}

const otraFuncion = (a) => {
    console.log(`Su variable a tiene un valor de ${a}`);
};

// otraFuncion('Hola');

class Perro {
    constructor(estatura, colorDeOjos, colorDePelo) {
        this.estatura = estatura;
        this.colorDeOjos = colorDeOjos;
        this.colorDePelo = colorDePelo;
    }
}

const caniche = new Perro(30, 'marrones', 'negro');

const arreglo = [123, 'hola', true, null, undefined];

// console.log(arreglo);

const arregloPerros = [caniche, 'perro2', 'perro3', 'perro4'];

// arregloPerros.forEach((perro) => {
//     console.log(perro);
// });

const objeto = {
    clave: 'valor',
    a: 1234,
    b: 'Hola soy b',
    c: 'Hola soy c',
    hola: function () {},
};

const propiedadQueQuiero = 'clave';

// console.log(objeto['a']);

let variable = 'Hola soy una variable';
const constante = 'Soy una constante';

console.log('Variable antes de modificar:', variable);

variable = 'Ahora soy otra variable';

console.log('Variable luego de modificar:', variable);

console.log('Constante antes de modificar:', constante);

// constante = 'Ahora soy otra varible';

const objeto2 = {
    a: 12312,
    b: 2231231,
    c: '1312321',
};


// console.log('Constante luego de modificar:', constante);
