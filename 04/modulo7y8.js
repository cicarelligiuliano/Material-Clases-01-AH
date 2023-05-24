class Persona {
    constructor(name, lastname, email) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.id = 1;

        Persona.personasCreadas++;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.name} ${this.lastname}`);
    }

    cambiarNombre(newName) {
        newName = newName.trim();
        this.name = newName;
    }

    get obtenerNombre() {
        return this.name;
    }
}

const giuliano = new Persona('Giuliano', 'Cicarelli', 'cicarelligiuliano@outlook.com.ar');

const arreglo = [1, 2, 3, 4, 5];

// console.log(giuliano.obtenerNombre);

// 1. Definir la clase Contador. *
// 2.Cada instancia de contador debe ser identificada con el nombre de la persona
// responsable de ese conteo. *
// 3.Cada instancia inicia su cuenta individual en cero. *
// 4.La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo
// contado por sus instancias, el cual también inicia en cero. *
// 5. Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
// 6. Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
// 7. Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
// 8. Definir el método contar que incremente en n veces tanto la cuenta individual como la cuenta general

class Contador {
    constructor(usuario) {
        this.usuario = usuario;
        this.cuenta = 0;
    }

    static contadorTotal = 0;

    get obtenerResponsable() {
        return this.usuario;
    }

    get obtenerCuentaIndividual() {
        return this.cuenta;
    }

    static get obtenerCuentaGlobal() {
        return Contador.contadorTotal;
    }

    incrementar(numero) {
        this.cuenta += numero;
        Contador.contadorTotal += numero;

        return;
    }
}

// const contadorMario = new Contador('Mario');
// const contadorJose = new Contador('Jose');
// const contadorPepe = new Contador('Pepe');
// const contadorMaria = new Contador('Maria');

// console.log(Contador.obtenerCuentaGlobal);

// contadorMario.incrementar(4);
// console.log(contadorMario.obtenerResponsable);
// console.log(contadorMario.obtenerCuentaIndividual);
// console.log(Contador.obtenerCuentaGlobal);

// contadorJose.incrementar(8)

// contadorPepe.incrementar(5)

// console.log(Contador.obtenerCuentaGlobal);

const arreglo2 = ['a', 'b', 'c', 'd'];

console.log(arreglo2);
// console.log(arreglo2.toString());
//PUSH
arreglo2.push('k');

console.log('PUSH', arreglo2);
//Unshift
arreglo2.unshift('l');

console.log('UNSHIFT', arreglo2);
//POP

const soyK = arreglo2.pop();
// console.log(soyK);
console.log('POP', arreglo2);

//SHIFT
arreglo2.shift();

console.log('SHIFT', arreglo2);

console.log(arreglo2.toString());
