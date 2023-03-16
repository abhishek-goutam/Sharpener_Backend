const express = require("express");
const router = express.Router();
// router.use('/add-product',(req,res,next)=>{
//     res.send('<form><input type="text" name="username"><button type="submit">Login</button></form>');
// });

router.get("/login", (req, res, next) => {
  res.send(
    `<form action="/login" method="POST" onsubmit="localStorage.setItem('username',document.getElementById('username').value)"><input id="username" type="text" name="name"><button type="submit" value="">Login</button></form>`
  );
});

router.post("/login", (req, res, next) => {
  res.redirect("/");
});
module.exports = router;
