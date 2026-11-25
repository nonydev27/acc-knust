const express = require("express");
const app = express();

app.get ("/",(req, res) => {

res.json ({
name:"Isaac Webkye",
index:"3155425",
year: 2,
Status:"ACC backend ready"
 });
});

app.listen(3000, () => {
console.log("Server is running on http://localhost:3000")
});
