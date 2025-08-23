const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Import routes
const weatherRoute = require("./routes/weather");
const routePlannerRoute = require("./routes/routePlanner");
const faqRoute = require("./routes/faq");

// Test API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

// Attach API routes
app.use("/weather", weatherRoute);
app.use("/route", routePlannerRoute);
app.use("/faq", faqRoute);


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
