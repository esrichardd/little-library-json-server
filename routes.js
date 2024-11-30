const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (email === "admin@gmail.com" && password === "admin") {
    res.json({
      id: 1,
      username: "admin",
      email: "admin@gmail.com",
      token: "fake-jwt-token",
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

router.post("/logout", (req, res) => {
  res.json({ message: "Logout successful" });
});

module.exports = router;
