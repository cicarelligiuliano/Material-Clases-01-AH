const server = require('./src/socket');
require('dotenv').config();

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
