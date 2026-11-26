const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    name: "HARRY NARTEY EPHRAIM",
    index: "6170224 / LEVEL 300",
    status: "ACC Backend Ready",
  });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});