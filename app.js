const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const process = require('process');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (_, res) => {
  res.send('<h1>Hello World!</h1>');
});

// Catch error 404
app.use((_, res, next) => {
  next(createError.NotFound());
});

// React on SIGINT and SIGTERM to gracefully shutdown
process.on('SIGINT', () => {
  process.exit(0);
});

process.on('SIGTERM', () => {
  process.exit(0);
});

module.exports = app;

