const express = require("express");
const router = express();

//User Routes..
router.use("/api/Users", require("./UserRoutes"));
//Contact Route..
router.use("/api/Contact", require("./ContactRoutes"));
//NewSletter Route..
router.use("/api/NewSletter", require("./NewSletterRoutes"));
//Article Routes..
router.use("/api/Article", require("./ArticleRoutes"));

//Route primary
router.get("/", (req, res)=> {

  res.send("Carlos Eletricista");
});

module.exports = router;