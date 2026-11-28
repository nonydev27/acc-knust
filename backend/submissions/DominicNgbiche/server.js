
const http = require('http');

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

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
