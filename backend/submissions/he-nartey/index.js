require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY;

app.get("/", (req, res) => {
  res.json({
    name: "HARRY NARTEY EPHRAIM",
    index: "6170224 / LEVEL 300",
    status: "ACC Backend Ready",
  });
});

app.post("/register", (req, res) => {
  const { name, email } = req.body || {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    name.trim() === "" ||
    email.trim() === ""
  ) {
    return res.status(400).json({
      success: false,
      error: "Name and email are required",
    });
  }

  res.status(201).json({
    success: true,
    message: "Member registered successfully",
    member: { name: name.trim(), email: email.trim() },
  });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
  console.log("Secret key loaded: " + Boolean(CLUB_SECRET_KEY));
});