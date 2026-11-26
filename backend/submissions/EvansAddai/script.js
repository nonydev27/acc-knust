const express = require('express'); 
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    const details = {
        name: 'Evans Addai',
        index: '9452326',
        year: 1,
        status: 'ACC Backend Ready', 

    }
    res.json(details);
})

app.listen(port, () => {
    console.log(`Server is running`);
})