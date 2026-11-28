const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    name: "Roland Quarshie",
    indexYear: "3152225/year 2",
    status: "ACC Backend Ready",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
