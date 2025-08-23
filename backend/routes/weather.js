const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { location } = req.query;
  res.json({
    location: location || "Unknown Port",
    weather: "Sunny 🌞",
    seaCondition: "Calm 🌊"
  });
});

module.exports = router;
