require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.get('/', (req, res) => {
    const details = {
        name: 'Evans Addai',
        index: '9452326',
        year: 1,
        status: 'ACC Backend Ready', 

    }
    res.json(details);
})

app.post('/register', (req, res) => {
    const { name, email } = req.body || {};

    if (typeof name !== 'string' || typeof email !== 'string' || !name.trim() || !email.trim() || !email.incliudes('@')) {
        return res.status(400).json({
            message: 'Your inputs are empty'
        });
    }
    return res.status(200).json({
            message: "Registration successful",
            member:{
             name: name.trim(),
            email: email.trim()
            }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running`);
})