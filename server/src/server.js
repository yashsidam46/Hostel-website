// server/src/server.js
require("dotenv").config();
const app = require("../app.js");
const connectDB = require("../config/db.js");

const PORT = process.env.PORT || 5000;

// connect to MongoDB first, then start listening for requests
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});