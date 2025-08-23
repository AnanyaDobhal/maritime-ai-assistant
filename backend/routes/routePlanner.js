const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { origin, destination } = req.body;
  res.json({
    origin,
    destination,
    estimatedTime: "5 days",
    recommendedPath: ["Port A", "Port B", "Port C"]
  });
});

module.exports = router;
