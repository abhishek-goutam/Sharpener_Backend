const fs = require("fs");

const requestHandler = (req, res) => {
  const method = req.method;
  if (req.url == "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (req.url == "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  if (req.url == "/home") {
    res.write("<html>");
    res.write("<head><title>My first Node Server</title>");
    res.write("<body><h1>Welcome home </h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>My first Node Server</title>");
  res.write("<body><h1> Welcome to My first Node Server</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
