const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY || "default-key";

app.get("/", (req, res) => {
  res.json({
    name: "Will Donkor Effah",
    index: "3136825",
    year: "Year 2",
    status: "ACC Backend Ready",
    secretConfigured: Boolean(CLUB_SECRET_KEY)
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
