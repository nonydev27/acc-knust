require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT ||3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY;

app.get ("/",(req, res) => {

res.json ({
name:"Isaac Webkye",
index:"3155425",
year: 2,
Status:"ACC backend ready",
secretConfigured: Boolean(CLUB_SECRET_KEY)
 });
});

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
