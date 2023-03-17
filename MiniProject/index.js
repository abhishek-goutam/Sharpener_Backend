const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginHandler = require("./routes/login");
const messageHandler = require("./routes/message");
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginHandler);
app.use(messageHandler);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'./','views','pageNotFound.html'));
});
app.listen(3000);
