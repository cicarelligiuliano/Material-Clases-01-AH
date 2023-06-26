const fs = require('fs');

// fs.writeFileSync('./prueba.txt', 'Este es mi contenido', 'utf-8');
// fs.appendFileSync('prueba.txt', '\tEste es otro contenido', 'utf-8');
// console.log(fs.existsSync('./prueba.txt'));

// setTimeout(() => {
//     fs.unlinkSync('prueba.txt');
// }, 3000);
// console.log(fs.existsSync('./prueba.txt'));

// let archivo;
// if (fs.existsSync('./prueba.txt')) {
//     archivo = fs.readFileSync('prueba2.txt', 'utf-8');
// } else {
//     fs.writeFileSync('./prueba.txt', 'Este es mi contenido', 'utf-8');
//     archivo = fs.readFileSync('prueba2.txt', 'utf-8');
// }
// fs.readFileSync('prueba.txt', 'utf-8');
// fs.readFile('./prueba.txt', 'utf8', (error, archivo) => {
//     if (error) {
//         console.log('error al abrir el archivo');
//         return;
//     }
//     console.log(archivo); // Este es el contenido
// });

// fs.writeFile('./prueba.txt', 'Este es el contenido', 'utf8', (error) => {
//     if (error) {
//         console.log('error al escribir el archivo');
//     }

//     fs.readFile('./prueba.txt', 'utf8', (error, archivo) => {
//         if (error) {
//             console.log('error al abrir el archivo');
//             return;
//         }
//         console.log(archivo); // Este es el contenido

//         fs.appendFile('./prueba.txt', 'Este es otro contenido', (error) => {
//             if (error) {
//                 console.log(error);
//                 return;
//             }

//             fs.readFile('./prueba.txt', 'utf8', (error, archivo) => {
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     console.log(archivo);
//                 }
//             });
//         });
//     });
// });

// setTimeout(() => {
//     fs.unlink('./prueba.txt', (error) => {
//         error ? console.log('No se pudo eliminar el archivo') : console.log('Eliminado correcto');
//     });
// }, 2000);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// const objeto = {
//     nombre: 'Mario',
//     edad: 24,
//     hobby: ['Correr', 'nadar'],
// };
// const objetoJSON = JSON.stringify(objeto, null, 2);

// const objetoNormal = JSON.parse(objetoJSON);

const usuario = { nombre: '', apellido: '', edad: '', state: '', id: '' };

class UserManager {
    constructor(usersPath) {
        this.users = [];
        this.usersPath = usersPath;
        this.lastId = 0;
        this.preload();
    }

    preload() {
        if (fs.existsSync(this.usersPath)) {
            const data = fs.readFileSync(this.usersPath, 'utf-8');

            const users = JSON.parse(data);

            this.users = users;

            const maxId = Math.max(...this.users.map((user) => user.id));
            this.lastId = maxId;
        } else {
            fs.writeFileSync(this.usersPath, JSON.stringify(this.users, null, 2), 'utf-8');
        }
    }

    checkUser(id) {
        //BASE DE DATOS
        ///USERS --> COLUMNAS (props), FILAS (CADA USUARIO)

        // const user = await Usuarios.findById(id)
        const user = this.users.find((user) => user.id == id);

        if (!user) return `No existe el usuario con id ${id}`;
        //res.status(404).json({msg: `No existe el usuario con id ${id}`})

        return user;
    }

    save(users) {
        fs.writeFileSync(this.usersPath, JSON.stringify(users, null, 2), 'utf-8');
    }
    getUsers() {
        return this.users;
    }

    addUser(newUser) {
        const { nombre, apellido, edad } = newUser;

        if (!nombre || !apellido || !edad) return 'Por favor ingrese un usuario valido';
        //return res.status(400).json({msg: "Por favor ingrese un usuario valido"})

        this.lastId++;

        const user = {
            id: this.lastId,
            nombre: newUser.nombre,
            apellido: newUser.apellido,
            edad: newUser.edad,
            state: true,
        };

        this.users.push(user);
        this.save(this.users);
        return `Usuario creado correctamente con el id: ${user.id}`;
        //return res.status(201).json({msg: `Usuario creado correctamente con el id: ${user.id}`})
    }

    editUser(id, newUser) {
        const user = this.checkUser(id);

        this.users[this.users.indexOf(user)] = { ...user, ...newUser };

        this.save(this.users);
        return `Usuario actualizado correctamente con el id: ${id}`;
    }

    deleteUser(id) {
        const user = this.checkUser(id);

        this.users[this.users.indexOf(user)] = { ...user, state: false };

        this.save(this.users);
        return `Usuario eliminado correctamente con el id: ${id}`;
    }

    deleteDatabase(password) {
        if (password != 123456) return 'Error en credenciales';

        this.save([]);
        return 'Base de datos borrada correctamente';
    }
}

const manager = new UserManager('users.json');

// console.log(manager.addUser({ nombre: 'Pepe', apellido: 'Rodriguez', edad: 12 }));
