const objeto = { nombre: 'Giuliano', apellido: 'Rodriguez', numero: 123456 };

// const { nombre, apellido, direccion } = objeto;

// console.log(nombre, apellido, direccion);

const req = { body: { id: 1, apellido: 'Petruzco', direccion: 'asdasda 12' } };

const { id, apellido, direccion } = req.body;

if (!id || !apellido || !direccion) {
    console.log('Te falta alguna propiedad');
}

const usuario = {
    nombre: 'John Doe',
    telefono: {
        cel: 113334444,
        trabajo: 113325555,
    },
};

const {
    nombre,
    telefono: { cel },
} = usuario;

const item = {
    item_id: 432,
    product_name: 'Some product',
    price_per_unit: 5600,
};

const { item_id: ID, product_name: name, price_per_unit: price } = item;

// console.log(ID, name, price);

const producto = {
    id: 432,
    name: 'Some product',
    price: 5600,
};

const producto2 = {
    id: 432,
    name: 'Some product',
    price: 5600,
};
const producto3 = {
    id: 432,
    name: 'Some product',
    price: 5600,
};

const cart = {
    id: 12,
    owner: 'Pepito',
    products: [producto, producto2, producto3],
};

const agregarProducto = (idProducto, idCarrito) => {
    const { id: idCart } = cart;
    const { id: idProduct } = producto;
};

const producto4 = {
    id: 10,
    nombre: 'Curso Javascript',
    precio: 12500,
};
const desestructurar = ({ id, nombre }) => {
    console.log(id, nombre);
};

// desestructurar(producto4);

const arreglo = [10, 20, 30, 40, 50];
const arreglo2 = [10, 20, 123, 45012, 12312];

const arregloFiltrado = arreglo.filter((el) => el < 14);

const [a, , , b] = arreglo;

// console.log(b);

const arregloModificado = [...arreglo, ...arreglo2];

// console.log(arregloModificado);

const objeto2 = { direccion: 'Avenida siempre viva 123', edad: 12 };

const objeto3 = { ...objeto, ...objeto2 };

const persona = {
    id: 12,
    nombre: 'Giuliano',
    apellido: 'Rodriguez',
    numero: 123456,
    direccion: 'Avenida siempre viva 123',
};
const newPersona = { id: 14, nombre: 'Pepito', apellido: 'romulo', banana: 'BANANA' };

const editarPersona = (persona, newPersona) => {
    const { id, ...limitedPerson } = newPersona;
    // const editedPerson = {
    //     nombre: newPersona.nombre || persona.nombre,
    //     apellido: newPersona.apellido || persona.apellido,
    //     numero: newPersona.numero || persona.numero,
    // };
    // persona = editedPerson;

    persona = { ...persona, ...limitedPerson };

    return persona;
};

console.log(editarPersona(persona, newPersona));

function sumar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0);
}
// console.log(sumar(4, 2)); // 6
// console.log(sumar(10, 15, 30, 5)); // 60
// console.log(sumar(100, 300, 50)); // 450


