// server/src/server.js

require("dotenv").config();

const express = require("express");
const app = require("../app.js");

const userRoutes = require("./routes/user.routes");
const connectDB = require("../config/db.js");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", userRoutes);

// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});