class Fifo {
    constructor() {
        this.cola = [];
    }

    agregar(element) {
        this.cola.unshift(element);
        return;
    }

    quitar() {
        return this.cola.pop();
    }

    get mostrar() {
        return this.cola;
    }

    get proximoElemento() {
        return this.cola[this.cola.length - 1];
    }
}

const cola = new Fifo();

cola.agregar('Vaso');
cola.agregar('Plato');
cola.agregar('Tenedor');
cola.agregar('Taza');
cola.agregar('Botella');
cola.agregar('Kiwi');

// console.log(cola.mostrar);
// console.log(cola.proximoElemento);
// console.log(cola.quitar());
// console.log(cola.mostrar);
// console.log(cola.proximoElemento);

class Lifo {
    //LAST IN FIRST OUT
    constructor() {
        this.pila = [];
    }

    agregar(element) {
        this.pila.unshift(element);
        return;
    }

    quitar() {
        return this.pila.shift();
    }

    get mostrar() {
        return this.pila;
    }

    get proximoElemento() {
        return this.pila[0];
    }
}

const pila = new Lifo();

pila.agregar('Vaso');
pila.agregar('Plato');
pila.agregar('Tenedor');
pila.agregar('Taza');
pila.agregar('Botella');
pila.agregar('Kiwi');

console.log(pila.mostrar);
console.log(pila.proximoElemento);
console.log(pila.quitar());
console.log(pila.mostrar);
console.log(pila.proximoElemento);
