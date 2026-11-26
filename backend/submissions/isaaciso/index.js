require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT ||3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY;

app.use(express.json());

app.get ("/",(req, res) => {

res.json ({
name:"Isaac Webkye",
index:"3155425",
year: 2,
Status:"ACC backend ready",
secretConfigured: Boolean(CLUB_SECRET_KEY)
 });
});

app.post("/register", (req, res) => {

const {name, email } =req.body ||  {};

if (!name ||!name.trim() || !email || !email.trim()) {
return res.status(400).json({error: "name and email are required"});
}

res.status(201).json({
message: "Registration Successful",
member: { name: name.trim(), email: email.trim()}
});
});

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
