const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const process = require("process");

const app = express();

const user = require('./api/routes/UserRoutes');
const bahan = require("./api/routes/BahanRoutes");
const dorayaki = require("./api/routes/DorayakiRoutes");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (_, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use("/bahan", bahan);
app.use("/dorayaki", dorayaki);
app.use(user);

// Catch error 404
app.use((_, res, next) => {
  next(createError.NotFound());
});

// React on SIGINT and SIGTERM to gracefully shutdown
process.on("SIGINT", () => {
  process.exit(0);
});

process.on("SIGTERM", () => {
  process.exit(0);
});

module.exports = app;
