var createError = require('http-errors');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
const { error } = require('console');
// var usersRouter = require('./routes/users');

var app = express();

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.listen(5200, (error) => {
  if (error) {
    console.log(`Server Error: ${error.message}`);
  } else {
    console.log('Server is running at http://localhost:5200');
  }
});

module.exports = app;
