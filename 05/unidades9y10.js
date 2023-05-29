const sumarRango = (a, b) => {
    let total = 0;
    for (let i = a; i < b; i++) {
        total += i;
    }
    return total;
};

// console.log(sumarRango(1, 10));

const creadorDeMultiplicacion = (a) => {
    return function (b) {
        return a * b;
    };
};

const multiplicaPorDos = creadorDeMultiplicacion(2);
const multiplicaPorTres = creadorDeMultiplicacion(3);

// console.log(multiplicaPorDos(3));
// console.log(multiplicaPorTres(3));

function saludar(nombre) {
    console.log('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = 'Pepito';
    callback(nombre);
}

function otraCosa(nombre) {
    for (let i = 0; i < nombre.length; i++) {
        console.log(nombre[i]);
    }
}

// procesarEntradaUsuario(saludar);

// procesarEntradaUsuario(otraCosa);

// const arreglo = ['ANA', 'PEPE', 'JOSE', 'MARIA'];

// console.log(arreglo.indexOf('ARTURO'));

function porCadaUno(arr, cb) {
    for (const el of arr) {
        cb(el);
    }
}

// console.log(arreglo.includes('JOSE'));

// porCadaUno(arreglo, function (el) {
//     if (el == 'JOSE') {
//         console.log('SE ENCONTRO A JOSE');
//     } else {
//         console.log(`ESTE NO ES JOSE, ES ${el}`);
//     }
// });

// arreglo.forEach((nombre) => {
//     console.log(nombre);
// });

// arreglo.find((el) => el == 'JOSE');

const usuarios = [
    { nombre: 'JOSE', id: 1 },
    { nombre: 'ANA', id: 2 },
    { nombre: 'MARIA', id: 3 },
    { nombre: 'PEPE', id: 4 },
];

// console.log(usuarios.find((el) => el.id == 3))

const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 22000 },
    { nombre: 'Desarrollo Web', precio: 16000 },
];
const resultado = cursos.filter((el) => el.nombre.includes('JS'));
// console.log(resultado);

const resultado2 = cursos.filter((el) => el.precio < 18000);

// console.log(resultado2);

// console.log(cursos.find((el) => el.nombre == 'Javascript'));

const cambiarNombre = (arreglo, nombre, NewName) => {
    const curso = arreglo.find((el) => el.nombre == nombre);

    if (!curso) {
        return 'No existe el curso';
    }

    arreglo[arreglo.indexOf(curso)] = { nombre: NewName, precio: curso.precio };

    return arreglo;
};

// console.log(cambiarNombre(cursos, 'AngularJS', 'Node Backend'));

const cursos2 = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 22000 },
    { nombre: 'Desarrollo Web', precio: 16000 },
];

const otroArreglo = cursos.map((curso) => curso.nombre);

// console.log(otroArreglo.filter((el) => el !== undefined));

// const nuevoArreglo = cursos.filter((el) => el.precio < 18000);

// console.log(
//     nuevoArreglo.map(function (curso) {
//         return curso.nombre;
//     })
// );

// const otroArregloPlus = [];

// cursos.forEach(function (curso) {
//     if (curso.precio < 18000) {
//         otroArregloPlus.push(curso.nombre);
//     }
// });

const numeros = [10, 20, 30, 40, 50, 12, 25, 32];
const frase = ['Hola', 'Soy', 'Giuliano', 'un', 'gusto'];

const algoReducido = frase.reduce((acumulador, el) => acumulador + ' ' + el, 'Presentacion:');

// console.log(algoReducido);

// console.log(cursos.sort((curso1, curso2) => curso2.nombre - curso1.nombre));

const productos = [
    { id: 1, producto: 'Arroz', precio: 125 },
    { id: 2, producto: 'Fideo', precio: 70 },
    { id: 3, producto: 'Pan', precio: 50 },
    { id: 4, producto: 'Flan', precio: 100 },
];

//Crearemos una función que busca su producto por id y lo devuelve,
//otra que nos dice si existe un producto determinado enviándole el nombre del mismo,
// una tercera que nos mostrara todos los productos con un precio menor a un numero enviado y
// por ultimo una que nos devolverla todos los nombres de los productos.

const buscarPorId = (productos, id) => {
    //PUEDO USAR FIND!!
    const producto = productos.find((producto) => producto.id == id);

    if (!producto) {
        return 'No existe el producto';
    }
    //APARTIR DE ACA SI EXISTE EL PRODUCTO

    return producto;
};

//otra que nos dice si existe un producto determinado enviándole el nombre del mismo,

const buscarPorNombre = (productos, nombre) => {
    //TENGO QUE USAR SOME
    return productos.some((producto) => producto.nombre == nombre);
};

// una tercera que nos mostrara todos los productos con un precio menor a un numero enviado y
const mostrarProductos = (productos, precio) => {
    const productosFiltrados = productos.filter((producto) => producto.precio < precio);
    if (productosFiltrados.length == 0) {
        return 'No se encontro productos con este precio';
    }

    return productosFiltrados;
};

const todosLosNombres = (productos) => {
    return productos.map((producto) => producto.nombre);
};

// console.log(Math.E);

// console.log(Math.min(1, 2, 3, -4, 123, 12394, -12312312));

// console.log(Math.round(20 + Math.random() * 30));

const fechaActual = new Date();

// console.log(fechaActual.toTimeString());

const arreglo3 = [];

for (let i = 0; i < 10000; i++) {
    arreglo3.push(i);
}

const inicio = new Date();
for (let i = 0; i < arreglo3.length; i++) {
    console.log('haciendo tiempo ');
}
const final = new Date();
// console.log('El proceso tardó: ' + (final - inicio) + ' milisegundos');

const inicio2 = new Date();
arreglo3.forEach((el) => {
    console.log('haciendo tiempo');
});
const final2 = new Date();
console.log('El proceso tardó: ' + (final - inicio) + ' milisegundos');
console.log('El proceso tardó: ' + (final2 - inicio2) + ' milisegundos');
