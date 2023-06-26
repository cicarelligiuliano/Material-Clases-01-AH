// fetch('http://localhost:8080/users/4')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'tomate',
        description: 'Es una fruta',
        price: 500,
        stock: 15,
        code: 'TD15',
        otraCosa: [{ products: [{ otraCosa: 123 }], papita: [{ banana: '123' }] }],
    }),
})
    .then((response) => response.json())
    .then((data) => console.log(data));

// fetch('http://localhost:8080/users/1', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ price: 120, stock: 150 }),
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// fetch('http://localhost:8080/users/2', {
//     method: 'DELETE',
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
