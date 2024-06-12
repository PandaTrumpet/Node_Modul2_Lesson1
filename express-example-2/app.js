import express from "express";
const app = express();

import movies from "./movies.js";

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.listen(3000, () => {
  console.log("Server is 3000");
});
