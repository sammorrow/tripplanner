var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next){
  res.render("home")
  // if (err){
  //   res.render("error")
  // }
});


router.use("/", function(req, res){
  res.render("error")
})

module.exports = router
