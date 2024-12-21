const express = require("express");
const router = express.Router();

//Middlewares
const ErrorsValidate = require("../middlewares/ErrorsValidate");
const { ContactValidate } = require("../middlewares/ContactValidate");

//Controllers
const {NewContact} = require("../controllers/ContactController");

// ROUTE
router.post("/", ContactValidate(), ErrorsValidate, NewContact);

module.exports = router;