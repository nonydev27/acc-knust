require('dotenv').config();

const http = require('http');

const PORT = process.env.PORT;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY;

const server = http.createServer((req, res) => {

    if(req.method === 'POST' && req.url === '/register'){
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            let person;
            try{
                person = JSON.parse(body);
            }
            catch(e){
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');

                return res.end(JSON.stringify({
                    message: "Invalid JSON data"
                }));
            }

            if(!person ||
    typeof person.name !== 'string' ||
    !person.name.trim() ||
    typeof person.email !== 'string' ||
    !person.email.trim()){
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');

                return res.end(JSON.stringify({
                    message: "Name and email are required"
                }))
            }


            res.statusCode = 201;

    res.setHeader('Content-Type', 'application/json');

    const response = {
        message: "Person registered successfully",

        person:{
            name: person.name,
            email: person.email
        }
    };

    res.end(JSON.stringify(response));
            
        })
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
