const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
res.json({
name: "Will Donkor Effah",
index: "3136825",
year: "Year 2",
status: "ACC Backend Ready",
});
});
app.listen(PORT, () => {
console.log('Server running on http://localhost:${PORT}');
});
