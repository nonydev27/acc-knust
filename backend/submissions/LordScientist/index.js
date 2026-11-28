require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY;

if (!CLUB_SECRET_KEY) {
  console.warn("CLUB_SECRET_KEY is missing. Copy .env.example to .env");
}

app.get("/", (req, res) => {
  res.json({
    name: "Roland Quarshie",
    indexYear: "3152225/year 2",
    status: "ACC Backend Ready",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    secretKeyLoaded: Boolean(CLUB_SECRET_KEY),
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
