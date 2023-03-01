const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  console.log("In the Other Middleware!");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="quantity"><button type="submit">Add Product</button></form>'
  );
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use("/", (req, res, next) => {
  console.log("In the Other Middleware");
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
