const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.write(data);
      res.end();
    });
  }

  if(req.url==='/user'){
      res.write("<h1>Welcome Sasikumar</h1>");
      res.end();
  }
});

server.listen(3000, "localhost", () => {
  console.log("server is started port on : 3000");
});
