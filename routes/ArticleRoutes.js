const express = require("express");
const router = express.Router();

//  Middlewares
const ErrorsValidate = require("../middlewares/ErrorsValidate");
const AuthGuard = require("../middlewares/AuthGuard");
const UploadsImages = require("../middlewares/UploadsImages");
const UploadsImage = require("../middlewares/UploadImage");
const {postArticleValidate, commentsValidade} = require("../middlewares/ArticleValidate");

//  Controllers
const {postArticle, showArticle, getArticle, commentsArticle, searchArticle, searchArticleCategory} = require("../controllers/ArticleController");

//  POST
router.post("/postArticle", AuthGuard, UploadsImage.array("images"), postArticleValidate(), ErrorsValidate, postArticle);
//  ALL ARTICLES
router.get("/", showArticle);
//  GET ARTICLE
router.get("/getArticle/:id", getArticle);
//  COMMENTS
router.put("/comment/:id", AuthGuard, commentsValidade(), ErrorsValidate, commentsArticle);
//  SEARCH ARTICLE
router.get("/search", searchArticle);
//  SEARCH ARTICLE Category
router.get("/search/category", searchArticleCategory);

module.exports = router;