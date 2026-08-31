/*import express from "express"
import cors from "cors"


const app = express();

app.post("/test", (req,res) => {
    res.send("")
})*/
// server/src/app.js
const express = require("express");
const cors = require("cors");

const app = express();

// ---- middleware ----

// allows your React app (running on localhost:5173) to make requests
// to this server (running on localhost:5000) — without this, the
// browser blocks the request due to CORS (Cross-Origin Resource Sharing)
app.use(cors());

// parses incoming JSON request bodies (e.g. when a review or complaint
// form submits data) into req.body — without this, req.body is undefined
app.use(express.json());

// ---- a simple test route ----
// confirms the server is alive and reachable, before any real routes exist
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// ---- routes will be mounted here later ----
// app.use("/api/hostels", hostelRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/reviews", reviewRoutes);
// app.use("/api/complaints", complaintRoutes);

module.exports = app; 
