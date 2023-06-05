// console.log('Inicio');

// setTimeout(() => {
//     console.log('Mitad');
// }, 0);

// console.log('Final');
// let i = 0;
// const interval = setInterval(() => {
//     console.log('Tik');
//     i++;

//     if (i == 5) {
//         clearInterval(interval);
//         console.log('Se termino el intervalo');
//     }
// }, 1000);

const funcionPromesa = (condicion) => {
    return new Promise((resolve, reject) => {
        if (condicion) {
            resolve('Promesa resulta');
        } else {
            reject('Promesa con error');
        }
    });
};

// funcionPromesa(true)
//     .then((respuesta) => {
//         console.log('RESOLVIO', respuesta);
//     })
//     .catch((err) => {
//         console.log('REJECT', err);
//     })
//     .finally(() => {
//         console.log('LLegamos al finally');
//     });

// const otraFuncion = async () => {
//     try {
//         const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await respuesta.json();

//         console.log(data);
//     } catch (error) {
//         console.log('ERROR FALLO LA CONSULTA', error);
//     } finally {
//         console.log('final');
//     }
// };

// otraFuncion();

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor == 0) {
            reject('no se puede dividir por 0');
        } else {
            resolve(dividendo / divisor);
        }
    });
};

const funcionAsync = async (dividendo, divisor) => {
    try {
        let resultado = await dividir(dividendo, divisor);
        console.log('Resultado', resultado);
    } catch (error) {
        console.log('ERROR', error);
    }
};

funcionAsync(10, 5); // Resultado 2
funcionAsync(10, 0); // ERROR "no se puede dividir por 0"
