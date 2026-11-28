require('dotenv').config();

const http = require('http');

const PORT = process.env.PORT;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY;

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    res.setHeader('Content-Type', 'application/json');

    const response = {
        name: "Dominic Ngbiche",
        index: "6170324",
        status: "ACC Backend Ready"
    };

    res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
