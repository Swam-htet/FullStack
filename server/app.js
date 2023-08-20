// node module import
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let mongoose = require("mongoose");

// db connection import
let {db} = require("./Config/db_config");

// auth middleware import
let auth = require('./middleware/auth');


// cors module import
let cors = require("cors");

// node module for route
let indexRouter = require("./routes/index");
let userRouter = require("./routes/users");
let categoryRouter = require("./routes/categories");
let customerRouter = require("./routes/customers");
let storeRouter = require("./routes/stores");
let employeeRouter = require("./routes/employees");
let manufacturerRouter = require("./routes/manufacturers");
let productRouter = require("./routes/products");
let stockRouter = require("./routes/stocks");
let saleRouter = require("./routes/sales");


// install express framework
let app = express();

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

// home page
app.use("/", indexRouter);

// login
app.use("/api/users", userRouter);

// check JWT
// app.use(auth.verifyUserToken);

// route register
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
