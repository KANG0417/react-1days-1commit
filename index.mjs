import http from "http";

let server = http.createServer((req, res) => {
  if (req.url !== "/books") {
    res.writeHead(404);
    res.end("not Found");
  }
  res.writeHead(200);
  res.end("Hello world");
});
server.listen(8080);
