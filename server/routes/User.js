const express = require('express');
const router = express.Router();
const {createUser} = require("../controllers/Signup");
const {login} = require("../controllers/Login");

router.post("/signup",createUser);
router.post("/login",login);

module.exports = router