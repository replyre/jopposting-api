const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jobRoutes = require("./routes/jobRoutes");
require("dotenv").config();
const app = express();

app.use(bodyParser.json());

// Routes
app.use("/api", jobRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
