const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("Abhishek Goutam")
    console.log(req);
})

server.listen(4000);