require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY;

app.get("/", (req, res) => {
  res.json({
    name: "HARRY NARTEY EPHRAIM",
    index: "6170224 / LEVEL 300",
    status: "ACC Backend Ready",
  });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
  console.log("Secret key loaded: " + Boolean(CLUB_SECRET_KEY));
});