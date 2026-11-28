const express = require("express");
const app = express();
app.use(express.json());
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
app.post("/register", (req, res) => {
  const { name, email } = req.body || {};
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ success: false, message: "Name is required and must be non-empty." });
  }
  if (!email || typeof email !== "string" || !email.includes("@") || email.trim() === "") {
    return res.status(400).json({ success: false, message: "Valid email is required." });
  }
  return res.status(201).json({
    success: true,
    message: "Member registration valid.",
    member: { name: name.trim(), email: email.trim() }
  });
});
app.listen(PORT, () => console.log("Server running on port " + PORT));
