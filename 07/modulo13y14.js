// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res) => res.json())
//     .then((data) => console.log(data));

const fetchGET = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
};

const consoleguear = async (url) => {
    const data = await fetchGET(url);

    console.log(data);
};


module.exports = { fetchGET, consoleguear };
