require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY;

const members = [];

app.use(express.json());

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

app.post("/members", (req, res) => {
  const { name, email } = req.body ?? {};

  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "Name is required" });
  }

  if (typeof email !== "string" || email.trim() === "") {
    return res.status(400).json({ error: "Email is required" });
  }

  const member = { name: name.trim(), email: email.trim() };
  members.push(member);

  res.status(201).json({
    message: "Member registered",
    member,
  });
});

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  next(err);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
