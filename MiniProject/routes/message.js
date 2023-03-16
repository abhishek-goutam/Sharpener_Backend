const express = require("express");
const router = express.Router();
const data = require('./data');
const fs = require("fs");

router.get("/", (req, res, next) => {
  res.send(
    `<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"><input id="message" type="text" name="message"><input type="hidden" name="username" id="username"><button type="submit">Send Message</button></form>`
  );
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  fs.appendFile("username.txt", `${req.body.username}: ${req.body.message}\n`, (err) => {
    if (err) {
      console.log(err);
    }
  });
  data.push(`{${req.body.username}:${req.body.message}}`)
  // fs.readFile("username.txt", (err, data) => {
  //   // console.log("dataaaa",data)
  //        if (err) {
  //          data = "No username found";
  //        }
  //        res.send(`<h1>${data}</h1>`);
  //       })
  console.log(`${req.body.username}:${req.body.message}`);
  // next();
  res.redirect('/');
});

// router.use("/message", (req, res, next) => {
//   fs.readFile("username.txt", (err, data) => {
//     if (err) {
//       data = "No username found";
//     }
//     res.send(`${data} <form action="/message" method="POST"  onsubmit="localStorage.setItem('message', document.getElementById('message','username').value)">
//     <input type="text" name="message" id="message" placeholder="Enter message">
//     <button type="submit">Send</button>
//   </form>`);
//   });
// });

module.exports = router;
