import express from "express";
const app = express();

import movies from "./movies.js";
app.set("json space", 4);
app.get("/movies", (req, res) => {
  //   res.send(movies);
  res.json(movies);
  //   const dataBaseResp = null;
  //   res.send(dataBaseResp);
  //   res.json(dataBaseResp);
});

app.listen(3000, () => {
  console.log("Server is 3000");
});
