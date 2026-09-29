const express = require("express");

const router = express.Router();

const handleuserSignup = require("../controllers/user.controller");

router.post("/register", handleuserSignup);

module.exports = router;