const fetchGET = require("../fetchGET");



const consoleguear = async (url) => {
    const data = await fetchGET(url);

    console.log(data);
};

consoleguear('https://jsonplaceholder.typicode.com/posts/1');
