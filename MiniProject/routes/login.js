const express = require("express");
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
// router.use('/add-product',(req,res,next)=>{
//     res.send('<form><input type="text" name="username"><button type="submit">Login</button></form>');
// });

router.get("/login", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','login.html'));
});

router.get('/contactUs',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','contactUs.html'))
})

router.post("/login", (req, res, next) => {
  res.redirect("/");
});
module.exports = router;
