// server/src/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongoose.connect() returns a promise — it resolves once
    // the connection to Atlas is actually established
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    // exit the process — there's no point running an API server
    // that can't reach its database
    process.exit(1);
  }
};

module.exports = connectDB;