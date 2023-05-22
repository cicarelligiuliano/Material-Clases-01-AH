function escribirNombre(nombre) {
    console.log(`Hola, mi nombre es ${nombre}`);
}

const papita = { nombre: 'Juan Cruz' };

function sumar(a, b) {
    return a + b;
}

// const c = sumar;

// const d = c(1, 2);

// console.log(d);

//funcion calculadora que reciba 3 parametros, los primeros 2 son los numeros y el tercero la operacion, que puede ser + - * /
function calculadora(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'a y b deben ser un numero';
    }

    switch (c) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Solo se permite + - * y /';
    }
}

// console.log(calculadora(6, 2, '/'));

// function sumar2(a, b) {
//     let resultado = a + b;
//     return resultado;
// }
// const resultado = sumar2(1, 2);

function mostrarNombre(nombre, cb) {
    cb(nombre);
    return;
}

// mostrarNombre('Agustin', function (nombre) {
//     console.log(nombre);
// });

// mostrarNombre('Agustin', escribirNombre);

function Restar(a, b) {
    return a - b;
}

const restar = (a, b) => a - b;

// console.log(restar(2, 1));

// 1. Definir la función
// mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo
// contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona
// bien en ambos casos.
// 2. Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una
// lista con 3 números como argumento.
// 3. Definir la función
// crearMultiplicador que reciba un número y devuelva una función anónima que reciba
// segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos
// funciones duplicar y triplicar, y probarlas con diferentes valores.

const mostrarLista = (lista = []) => {
    if (lista.length == 0) {
        console.log('Lista vacia');
        return;
    }

    console.log(lista);

    return;
};

// mostrarLista([1, 2, 3, 4]);

const otraMostrarLista = function (lista = []) {
    if (lista.length == 0) {
        console.log('Lista vacia');
        return;
    }

    console.log(lista);

    return;
};

// otraMostrarLista([1, 2, 3]);

// 3. Definir la función
// crearMultiplicador que reciba un número y devuelva una función anónima que reciba
// segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos
// funciones duplicar y triplicar, y probarlas con diferentes valores.

const crearMultiplicado = (a) => {
    return function (b) {
        return a * b;
    };
};

const multiplicarPorCinco = crearMultiplicado(5);

// console.log(multiplicarPorCinco(2));

const persona1 = {
    nombre: 'Martin',
    apellido: 'Machado',
};

// console.log(persona1['apellido']);

const persona2 = { nombre: 'Homero', edad: 39, calle: 'Av. Siempreviva 742' };

// console.log(persona2);

persona2.nombre = 'Rodolfo';
persona2['hijos'] = ['Bart', 'Lisa', 'Maggie'];

// console.log(persona2);

// function Persona(nombre, apellido, edad, direccion) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.direccion = direccion;

//     this.saludar = function () {
//         console.log(`Hola, mi nombre es ${this.nombre}`);
//     };
// }

// const persona3 = new Persona('Agustin', 'Tomillo', 38, 'Recultica 291');
// const persona4 = new Persona('Rodolfo', 'Rostuli', 17, 'Recultica 365');

// console.log(persona4);
// persona3.saludar();

// let cadena = 'Soy un string';

// console.log(cadena.toUpperCase());
let arreglo = ['Hola', 'chau', 'baba', 'bebe', 'tucu'];

// const keys = Object.keys(persona3);

// for (let propiedad in persona3) {
//     console.log(`Propiedad: ${propiedad}, Valor: ${persona3[propiedad]}`);
// }

// for (let i = 0; i < keys.length; i++) {
//     console.log(persona3[keys[i]]);
// }

// 1.Definir una función "constructora" Person para crear un objeto que reciba “nombre, apellido, edad y dirección”
// 2. Crear un método que getPerson que muestre los datos como un string del tipo “Hola, mi nombre es…, tengo … años y vivo..”
// 3. Crear un método editNameAndLastName que permita modificar el nombre y el apellido al mismo tiempo y otro que permita modificar la edad editAges
// 4. Crear otra función Child que se utilice para crear un hijo con las mismas propiedades.
// 5. Agregar una propiedad children a Person que sea un arreglo.
// 6. Agregar un método que permita agregarle hijos a la persona siendo estos un objeto de Child.

function Child(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

function Person(nombre, apellido, edad, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.direccion = direccion;
    this.children = [];

    this.getPerson = () => {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en ${this.direccion}`;
    };

    this.editNameAndLastName = function (newNombre, newApellido) {
        if (!newNombre || !newApellido) return 'Faltan datos necesarios';

        this.nombre = newNombre;
        this.apellido = newApellido;

        return 'Se cambio el nombre y apellido correctamente';
    };

    this.editAges = (newAges) => {
        if (!newAges || typeof newAges != 'number') {
            return 'Valores incorrectores';
        }

        this.edad = newAges;

        return 'Se cambio la edad correctamente';
    };

    this.addChild = (nuevoNiño) => {
        if (!(nuevoNiño instanceof Child)) {
            return 'El hijo debe ser una instancia de la clase hijo';
        }

        this.children.push(nuevoNiño);
        return 'Se agrego el hijo correctamente';
    };
}

const persona12 = new Person('Giuliano', 'Cicarelli', 28, 'Uriarte 1268');
const hijo1 = new Child('Mario', 'Cicarelli', 4);

// console.log(persona12.getPerson());

// console.log(persona12.editNameAndLastName('Juan cruz', 'Apolo'));
// console.log(persona12.getPerson());
// console.log(persona12);
console.log(persona12.addChild('Mario', 'Cicarelli', 4));
// console.log(persona12);
