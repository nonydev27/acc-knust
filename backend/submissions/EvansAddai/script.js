require('dotenv').config();

const express = require('express'); 
const app = express();
const PORT = Number(process.env.PORT);
app.get('/', (req, res) => {
    const details = {
        name: 'Evans Addai',
        index: '9452326',
        year: 1,
        status: 'ACC Backend Ready', 

    }
    res.json(details);
})

app.listen(PORT, () => {
    console.log(`Server is running`);
})