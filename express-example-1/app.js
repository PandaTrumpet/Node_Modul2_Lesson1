import express, { request, response } from "express";
const app = express(); //app- веб сервер
app.get("/", (request, response) => {
  response.send("<h1>Home Page</h1>");
});

app.get("/contacts", (request, response) => {
  console.log(request.url);
  console.log(request.method);
  response.send("<h1>Contacts Page</h1>");
});
app.listen(4000, () => console.log("Server running on 4000 PORT"));
