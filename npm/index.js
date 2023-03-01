const express = require('express');
const http = require('http');

const app = express();

app.use((req,res,next)=>{
    console.log("In the Middleware");
    next();
})

app.use((req,res,next)=>{
    console.log("In the Other Middleware");
    res.send('<h1>Hello from Express</h1>')
})

app.listen(3000);



