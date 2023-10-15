// node module import
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let dotenv = require('dotenv').config();
let mongoose = require("mongoose");
let cors = require("cors");

// node module import for route
let indexRouter = require("./routes/index.route");
let userRouter = require("./routes/users.route");
let categoryRouter = require("./routes/categories.route");
let customerRouter = require("./routes/customers.route");
let storeRouter = require("./routes/stores.route");
let employeeRouter = require("./routes/employees.route");
let manufacturerRouter = require("./routes/manufacturers.route");
let productRouter = require("./routes/products.route");
let stockRouter = require("./routes/stocks.route");
let saleRouter = require("./routes/sales.route");

// middleware import
const {ErrorHandler} = require("./middleware/error.middleware");
const {NotFoundHandler} = require("./middleware/not-found.middleware");


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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// mongoDB connection
mongoose
  .connect(process.env.ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB atlas connected");
  })
  .catch(console.log);

// home page
app.use("/", indexRouter);
app.use("/api", indexRouter);


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
app.use(NotFoundHandler);

// error handler
app.use(ErrorHandler);

module.exports = app;


