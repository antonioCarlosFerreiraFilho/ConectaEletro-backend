const express = require("express");
const router = express.Router();

//Middlewares
const ErrorsValidate = require("../middlewares/ErrorsValidate");
const AuthGuard = require("../middlewares/AuthGuard");
const UploadsImage = require("../middlewares/UploadsImages");
const { registerValidate, loginValidate, editValidate } = require("../middlewares/UserValidate");

//Controllers
const { register, login, profile, getUser, edit } = require("../controllers/UserController");

//Routes
router.post("/register", registerValidate(), ErrorsValidate, register);
router.post("/login", loginValidate(), ErrorsValidate, login);
router.get("/profile", AuthGuard, profile);
router.get("/:id", AuthGuard, getUser);
router.put("/edit", AuthGuard, UploadsImage.single("imageProfile"), editValidate(), ErrorsValidate, edit);

module.exports = router;