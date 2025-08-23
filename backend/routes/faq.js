const express = require("express");
const router = express.Router();

const faqs = [
  { q: "What documents are needed for international shipping?", a: "Bill of Lading, Invoice, Packing List." },
  { q: "How is cargo tracked?", a: "Using AIS (Automatic Identification System) & GPS." },
  { q: "What is IMO?", a: "International Maritime Organization (UN agency)." }
];

router.get("/", (req, res) => {
  res.json(faqs);
});

module.exports = router;
