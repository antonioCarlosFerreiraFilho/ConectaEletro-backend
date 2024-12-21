const express = require("express");
const router = express.Router();

//Middlewares
const ErrorsValidate = require("../middlewares/ErrorsValidate");
const { newSletterValidate } = require("../middlewares/NewSletterValidate");

//Controllers
const {NewSletterPost} = require("../controllers/NewSletterController");

// ROUTE
router.post("/", newSletterValidate(), ErrorsValidate, NewSletterPost);

module.exports = router;