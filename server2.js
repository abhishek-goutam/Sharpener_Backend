const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url == "/home") {
        res.write("<html>");
      res.write("<head><title>My first Node Server</title>");
      res.write("<body><h1>Welcome home </h1></body>");
      res.write("</html>");
       return res.end();
      }
      if (req.url == "/about") {
        res.write("<html>");
      res.write("<head><title>My first Node Server</title>");
      res.write("<body><h1>Welcome to About </h1></body>");
      res.write("</html>");
       return res.end();
      }
      if (req.url == "/node") {
        res.write("<html>");
      res.write("<head><title>My first Node Server</title>");
      res.write("<body><h1>Welcome to my node Js Project </h1></body>");
      res.write("</html>");
       return res.end();
      }
})

server.listen(3000);