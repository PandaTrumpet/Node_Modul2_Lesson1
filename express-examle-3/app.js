import express from "express";
import cors from "cors";
import movies from "./movies.js";
const app = express();
// const corsMiddleware = cors();

// app.use(corsMiddleware);

// или
app.use(cors());

// app.use((req, res, next) => {
//   console.log("First middlewar");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Second middleware");
//   next();
// });

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

/*
const cors = options => {
    const middelware = (req, res, next)=> {
        // apply options
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    }

    return middleware;
}
*/
app.get("/api/products", (req, res) => {
  res.json([]);
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    maessage: "Not Found",
  });
});
app.listen(3000, () => {
  console.log("Server is running 3000");
});
