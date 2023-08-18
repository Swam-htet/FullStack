// node module import
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// db connection import
var {db} = require("./Config/db_config");

// auth middleware import
let auth = require('./middleware/auth');


// cors module import
var cors = require("cors");

// node module for route
var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");
var categoryRouter = require("./routes/categories");
var customerRouter = require("./routes/customers");
var storeRouter = require("./routes/stores");
var employeeRouter = require("./routes/employees");
var manufacturerRouter = require("./routes/manufacturers");
var productRouter = require("./routes/products");
var stockRouter = require("./routes/stocks");
var saleRouter = require("./routes/sales");


// install express framework
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


// cors use
app.use(cors());


// middle-ware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// mongoDB connection
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected")
}).catch(error => console.log)


// route register
app.use("/api", indexRouter);
app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/customers", customerRouter);
app.use("/api/stores", storeRouter);
app.use("/api/employees", employeeRouter);
app.use("/api/manufacturers", manufacturerRouter);
app.use("/api/products", productRouter);
app.use("/api/stocks", stockRouter);
app.use("/api/sales", saleRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
