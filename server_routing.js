const http = require("http");
const server = http.createServer((request, response) => {
  const path = request.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.end("You are in HOME page!!");
  } else if (path.toLocaleLowerCase() === "/about") {
    response.end("You are in ABOUT page!!!");
  } else if (path.toLocaleLowerCase() === "/product") {
    response.end("You are in CONTACT page!!!");
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.end("You are in CONTACT page!!!");
  } else {
    response.end("Error 404: Page not found!!");
  }
});
server.listen("8000", "127.0.0.1", () => {
  console.log("Server started!!");
});
