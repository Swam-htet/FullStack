var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var customeLogger = require("./middleware/customLogger");

// import mysql connection
let {connection} = require("./config/connection");


// route import  
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require("./routes/products");

// create express application 
var app = express();

// mysql connection
connection.getConnection((err, conn) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
  } else {
    console.log("Connected to MySQL!");
    conn.release();
  }
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// custom middleware
// app.use(customeLogger.log);


// middleware use
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// route register 
app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use("/api/products", productRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
