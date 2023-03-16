const express = require("express");
const bodyParser = require("body-parser");
const loginHandler = require("./routes/login");
const messageHandler = require("./routes/message");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginHandler);
app.use(messageHandler);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not found</h1>");
});
app.listen(3000);
