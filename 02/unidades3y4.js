let i = 1;

function foo() {
    let i = 'soy i';
    let j = 'soy j';
    // console.log(i);
    // console.log(j);
    let f;
    if (true) {
        f = 45;
    }
    console.log(f);
}

// foo();

//Declaracion
let b;

//Asignacion
b = 3;

//Inicializacion
let c = 34;

//Mutabilidad
let obj = { nombre: 'giuliano', apellido: 'cicarelli' };

obj.nombre = 'Pablito';

// const obj2 = { nombre: 'Federico', apellido: 'Aserra' };
// console.log(obj);

// obj2.nombre = 'Juan Cruz';
// console.log(obj2);

const arreglo = [1, 2, 3, 4];

const arreglo2 = arreglo;

// console.log(arreglo);
// console.log(arreglo2);

arreglo[0] = 45;

// console.log(arreglo);
// console.log(arreglo2);

const d = b + c;

// console.log([1, 2, 3] === [1, 2, 3]);
// console.log(3 != 2);
// console.log(3 > 2);
// console.log(3 < 2);
// console.log(3 >= 2);
// console.log(3 <= 2);

// console.log(+'7');

//Comparadores logicos

// //AND &&
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//OR ||
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// //! Not
// console.log(!true);
// console.log(!false);

// console.log(true && 4);
// console.log(false && 4);

// console.log(true || 2);
// console.log(false || 2);

// console.log(Boolean('false'));
// console.log(Boolean(0));
// console.log(Boolean(-1231));
// console.log(Boolean([]));
// console.log(Boolean(-1231));

// if ([]) {
//     console.log('La condicion esta en true');
// }

let condicion = true;
let condicion2 = true;

// if (condicion && condicion2) {
//     console.log('Es un true');
// } else if (condicion2) {
//     console.log('Es un true en condicion 2');
// } else {
//     console.log('nada se cumplio');
// }

// condicion = 2;

// switch (condicion) {
//     case 1:
//         console.log('La condicion vale 1');
//         break;
//     case 2:
//         console.log('La condicion vale 2');
//         break;
//     case 3:
//         console.log('La condicion vale 3');
//         break;
//     case 4:
//         console.log('La condicion vale 4');
//         break;
//     case 5:
//         console.log('La condicion vale 5');
//         break;
//     case 6:
//         console.log('La condicion vale 6');
//         break;
//     default:
//         console.log('La condicion no vale ni 1,2,3,4,5,6');
// }

// const arreglo3 = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < arreglo3.length; i++) {
//     console.log(arreglo3[i]);
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

const arreglo9 = ['a', 'b', 'c', 'd', 'e'];

// let k = 0;
// while (k < 10) {
//     console.log('hola');
// }

// let k = 0;

// do {
//     console.log(k);
//     k++;
// } while (k == 0);

let nombreIngresado = 'giuliano';
let apellidoIngresado = 'cicarelli';

if (nombreIngresado.toLocaleLowerCase() == 'giuliano' && apellidoIngresado.toLocaleLowerCase() == 'cicarelli') {
    console.log('Hola Giuliano Cicarelli');
} else {
    console.log('Usuario invalido');
}
